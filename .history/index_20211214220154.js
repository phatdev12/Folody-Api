const express = require('express')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(__dirname + '/data.json')
})
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})