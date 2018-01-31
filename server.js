const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const port = process.env.PORT || 5000
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('./frontEnd/rideshare/build'))//may need to change to ./frontEnd

app.use(cors())

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
    console.log(req.body);
    knex('users').insert({
        username:req.body.username,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:hash,
        salt:salt
    }, '*')
    .then(user=> {
      var token = jwt.sign({ id: user.id }, 'A4e2n84E0OpF3wW21')
      res.status(200).send({id: user[0].id, token: token})
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// Log In Route
app.post('/login', function (req, res) {
    knex('users').where({
    email: req.body.email
    })
    .first()
    .then(function(user) {
      if(!user) {
        res.status(401).send("Email doesnt exist")
      }
      if(bcrypt.compareSync(req.body.password, user.password)) {
        var token = jwt.sign({ id: user.id }, 'A4e2n84E0OpF3wW21')
        res.status(200).send({message: "logged in", token: token})
      }
      else{
        res.status(404).send("password doesn't match")
      }
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

//Rides Post
app.post('/rides', (req,res,next) => {
    let jwtkey = req.body.jwt
    console.log(jwtkey)
    var decoded = jwt.verify(jwtkey, 'A4e2n84E0OpF3wW21', function(err, decoded) {
    if(err) {
        console.log(err)
    } else{
        return decoded
    }
    })
    console.log(decoded.id)
    knex('rides')
    .insert({
        user_id: decoded_id,
        concert_id:req.body.concert_id,
        date_time: req.body.date_time,
        venue_name: req.body.venue_name,
        venue_address: req.body.venue_address,
        artists: req.body.artists,
        driverName:req.body.driverName,
        email: req.body.email,
        phone:req.body.phone,
        availableSeats: req.body.availableSeats,
        person_address:req.body.person_address,
        departingTime:req.body.departingTime,
        comments:req.body.comments,
    },'*')
    .then(newRide => {
      let ride ={
        id: newRide[0].id,
        user_id: decoded_id,
        concert_id:newRide[0].concert_id,
        date_time: newRide[0].date_time,
        venue_name: newRide[0].venue_name,
        venue_address: newRide[0].venue_address,
        artists: newRide[0].artists,
        driverName:newRide[0].driverName,
        email: newRide[0].email,
        phone:newRide[0].phone,
        availableSeats: newRide[0].availableSeats,
        person_address:newRide[0].person_address,
        departingTime:newRide[0].departingTime,
        comments:newRide[0].comments,
      }
        res.status(200).send(ride)
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

//Get All for Events
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

// Get on for Events
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
