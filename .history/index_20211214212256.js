const express = require('express')

const app = express()
const data = require('./data.json')

app.use(express.json())
app.get('/', (req, res) => {
    res.json(data)
})
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})