const express = require('express')
const bodyParser = require("body-parser")
const usersRouter = require("./Routes/users")

const app = express()

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.get('/', (req, res) => res.send("this is api"))
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})