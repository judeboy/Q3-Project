const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 3000


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'));


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
    knex('users').insert({
        username:req.body.first,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:hash,
        salt:salt
    },'*') 
    .then(user=>{
        res.status(204).send({id:user[0].id})
    })
})

// Log In Route
app.post('/login', function (req, res) {
    knex('users').where({
    email: req.body.email
    })
    .first()
    .then(user => {
        console.log(user);
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

//Delete Rides 
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
