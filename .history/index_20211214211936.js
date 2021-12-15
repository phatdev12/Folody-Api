const express = require('express')

const app = express()
const data = require('./data.json')

app.get('/', (req, res) => {
    res.json(JSON.stringify(data))
})
app.listen(5000, function(){
    console.log('App started http://localhost:3001')
})