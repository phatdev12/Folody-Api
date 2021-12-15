const express = require('express')
const bodyParser = require("body-parser")
const usersRouter = require("./Routes/users")

const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/data.json')
})

app.get('/', (req, res) => res.send("this is api"))
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})