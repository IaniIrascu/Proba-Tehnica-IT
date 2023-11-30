require('dotenv').config()
const express = require('express')
const cors = require('cors');
const { connectToDb, getDb } = require('./db.js')
const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')
const bcrypt = require ('bcrypt')

//init app and middleware
const app = express()
app.use(express.json())
app.use(cors())

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
}

//db connection
let db

connectToDb((err) => {
    if(!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

//routes
app.get('/users', (req, res) => {                             //get users
  
  let users = []

    db.collection('users')
        .find()
        .forEach(user => users.push(user)) 
        .then(() => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({error: 'could not fetch'})
        })
})

app.get('/polls', (req, res) => {                              //get polls
  
  let polls = []
    db.collection('polls')
        .find()
        .forEach(poll => polls.push(poll)) 
        .then(() => {
            res.status(200).json({polls})
        })
        .catch(() => {
            res.status(500).json({error: 'could not fetch'})
        })
})

app.post('/userpolls' , authenticateToken, (req, res) => {                //get polls of user
  const { email } = req.body;

  let userPolls = []
  let pollCount = 0;

    db.collection('polls')
    .find()
    .forEach(userPoll => {
      if(userPoll.email === email) 
        {
          userPolls.push(userPoll)
          pollCount++;
        }

    }) 
    .then(() => {
        res.status(200).json({pollCount: pollCount, userPolls})
    })
    .catch(() => {
        res.status(500).json({error: 'could not fetch'})
    })})


    app.post('/otherpolls' , authenticateToken, (req, res) => {                //get polls of user
      const { email } = req.body;
    
      let otherPolls = []
      let pollCount = 0;
    
        db.collection('polls')
        .find()
        .forEach(otherPoll => {
          if(otherPoll.email !== email) 
            {
              otherPolls.push(otherPoll)
              pollCount++;
            }
    
        }) 
        .then(() => {
            res.status(200).json({pollCount: pollCount, otherPolls})
        })
        .catch(() => {
            res.status(500).json({error: 'could not fetch'})
        })})



app.post('/register-user', async (req, res) => {                       //register user
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        await db.collection('users').insertOne({ email, password: hashedPassword });
    
        res.json({ success: true });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });


 app.post('/create-poll', async (req, res) => {                      //create poll
    const { email, title, options } = req.body;
    
     try {
        const result = await db.collection('polls').insertOne({ email, title, options });
  
        res.status(201).json(result);
      } catch (error) {
        console.error('Error creating poll:', error);
        res.status(500).send('Internal Server Error');
      } 
    });
  


app.post('/check-user', async (req, res) => {                             //login user
    const { email, password } = req.body;
  
    try {
      const user = await db.collection('users').findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
   
        if (passwordMatch) {
          const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET)
          res.json({ accessToken: accessToken })
        } else {
          res.json({ accessToken: null, error: 'Incorrect password' });
        }
      } else {
        res.json({ accessToken: null, error: 'Email not found' });
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.delete('/delete-poll', authenticateToken, async (req, res) => {
    const { title } = req.body;
    try {
      const poll = await db.collection('polls').findOne({ title });
  
      if (!poll) {
        return res.status(404).json({ message: 'Poll not found.' });
      }
  
      const result = await db.collection('polls').deleteOne({ _id: poll._id });
  
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Poll deleted successfully.' });
      } else {
        res.status(404).json({ message: 'Poll not found.' });
      }
    } catch (error) {
      console.error('Error deleting poll:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });
  

