const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 3000


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Get all route
// app.get('/', (req, res, next) => {
//     res.send('working')
// })
app.get('/api', (req, res, next) => {
    knex('users')
    .select('id','username','email','password','phone_number')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

app.get('/rides', (req, res, next) => {
    knex('rides')
    .select('id','date_time','venue_name')
    .then(data=>{
        res.send(data)
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
