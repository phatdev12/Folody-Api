const express = require('express')
const bodyParser = require("body-parser")
const usersRouter = require("./Routes/users")
const { v4: uuidv4 } = require('uuid');

const app = express()
const router = express.Router()
const users = []
app.use(bodyParser.json())
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/', (req, res) => {
    const user = req.body
    const userWithID = { ...user, id: uuidv4() }
    users.push(userWithID)
    res.send("this is api")
})
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})