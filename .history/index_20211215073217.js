const express = require('express')
const bodyParser = require("body-parser")
const usersRouter = require("./Routes/users")

const app = express()
const router = express.Router()
const data = require('../data.json')
app.use(bodyParser.json())
router.get('/users', (req, res) => {
    console.log(data)
    res.send(data)
})

app.get('/', (req, res) => res.send("this is api"))
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})