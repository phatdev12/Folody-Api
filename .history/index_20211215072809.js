const express = require('express')
const bodyParser = require("body-parser")
const apiRouter = require("./Routes/routes")

const app = express()

app.use(bodyParser.json())
app.use('/api', apiRouter)
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})