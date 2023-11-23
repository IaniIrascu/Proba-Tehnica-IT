const express = require('express')
const { connectToDb, getDb } = require('./db.js')
const { ObjectId } = require('mongodb')

//init app
const app = express()

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
app.get('/Users', (req, res) => {
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