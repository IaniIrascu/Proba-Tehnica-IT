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


//middleware
  
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403)
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
app.get('/users', authenticateToken, (req, res) => {
  
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

app.get('/users/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)) {


        db.collection('users')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'could not fetch'})
        })
    } else {
        res.status(500).json({error: 'not a valid id'})
    }
})

app.post('/users', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Save the user with the hashed password
        await db.collection('users').insertOne({ email, password: hashedPassword });
    
        res.json({ success: true });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

app.post('/check-user', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await db.collection('users').findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
   
        if (passwordMatch) {
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
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


  app.get('/polls', authenticateToken, (req, res) =>{
    res.json(polls.filter (poll => poll.email === req.user.email))
  })

