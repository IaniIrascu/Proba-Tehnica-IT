const express = require('express')
const cors = require('cors');
const { connectToDb, getDb } = require('./db.js')
const { ObjectId } = require('mongodb')

//init app and middleware
const app = express()
app.use(express.json())
app.use(cors());

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
app.get('/users', (req, res) => {
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

app.post('/users', (req, res) => {
    const user = { email: req.body.email, password: req.body.password }

    db.collection('users')
        .insertOne(user)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err:'could not create doc'})
        })
})