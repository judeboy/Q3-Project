const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const port = process.env.PORT || 5000
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
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
    return knex('users').insert({
        username:req.body.first,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:hash,
        salt:salt
    }, '*')
    .then(user=> {
      let newUser = {
        id: user[0].id,
        username: user[0].username,
        email: user[0].email,
        phone_number: user[0].phone_number,
        password: user[0].password,
      }
        res.status(200).send(newUser)
    })
    .catch(err => {
      next(err)
    })
})

// Log In Route
app.post('/login', function (req, res) {
    // knex('users').where({
    // email: req.body.email
    // })
    // .first()
    // .then(user => {
    //     bcrypt.compare(req.body.password, user.password, function(err, ver) {
    //         ver ? res.status(200).send({id:user.id}): res.sendStatus(401)
    //     })
    // })
  let data = req.body
   return knex('users')
   .where('email', data.email)
   .first()
   .then(function(user) {
    if(!user) {
      res.status(401).send("Email doesnt exist")
    }
    if(bcrypt.compareSync(data.password, user.password)) {
      // var token = jwt.sign({ id: user.id }, 'A4e2n84E0OpF3wW21')
      // res.status(200).send({message: "logged in", token: token})
      res.status(200).send({message: "logged in"})
    }
    else{
      res.status(404).send("password doesn't match")
    }
  })
  .catch(function(err){
    return err
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
        res.status(404).json({error: 'Not able to find it'})
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

// Get all route
app.get('/', (req, res, next) => {
    res.send('working')
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
    res.status(404).json({ error: { status: 404, message: 'Not been found' }})
})

const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)
