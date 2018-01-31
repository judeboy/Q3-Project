const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 5000
const path = require('path')
const dotenv = require('dotenv').config()

app.use(express.static(path.join(__dirname, './frontEnd/rideshare/build')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Get all route
// app.get('/', (req, res, next) => {
//     res.send('working')
// })

// Get All
app.get('/users', (req, res, next) => {
    knex('users')
    .select('id','username','email','password','phone_number')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Get One
app.get('/users/:id', (req, res, next) => {
    let id = req.params.id
    knex('users')
    .where('id',id)
    .select('id','username','email','password','phone_number')
    .then(data=>{
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Sign Up Route
app.post('/signup', function(req, res, next){
    var salt = bcrypt.genSaltSync(4)
    var hash = bcrypt.hashSync(req.body.password, salt);
    // console.log(req.body);
    knex('users').insert({
        username:req.body.username,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:hash,
        salt:salt
    },'*')
    .then(user=>{
      console.log('user',user);
        res.status(200).send({id:user[0].id})
    })
})



// Log In Route
app.post('/login', function (req, res) {
    knex('users').where({
    email: req.body.email
    })
    .first()
    .then(user => {
        bcrypt.compare(req.body.password, user.password, function(err, ver) {
            ver ? res.status(200).send({id:user.id}): res.sendStatus(401)
        })
    })
})

// Rides Get All
app.get('/rides', (req, res, next) => {
    knex('rides')
    .select('id','*')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Rides Get One Route
app.get('/rides/:id', (req, res, next) => {
    let id = req.params.id
    knex('rides')
    .where('id',id)
    .select('id','*')
    .then(data=>{
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Patch Rides
app.patch('/rides/:id', (req, res, next) => {
    let id = req.params.id
    console.log(req.body.number_seats)
    knex('rides')
    .where('id',id)
    .update({
        id: req.body.id,
        number_seats:req.body.number_seats,
    })
    .then(data=>{
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

app.delete('/rides/:id', (req, res, next) => {
    let id = req.params.id
    console.log(req.params.id)
    knex('rides')
    .where('id',id)
    .returning(['*'])
    .del()
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})
//get all for events database

app.get('/events',(req,res,next)=>{
  knex('events')
    .select('*')
    .then(data=>{
      res.send(data)
    })
    .catch(err=>{
      res.status(404).send(err)
    })
})

app.get('/events/:id',(req,res,next)=>{
  let id = req.params.id
  knex('events')
  .where('id',id)
  .select('id','*')
  .then(data=>{
    res.send(data[0])
  })
  .catch(err=>{
    res.status(404).send(err)
  })
})



//Error
app.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})

const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)