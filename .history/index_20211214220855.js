const express = require('express')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 't/json');
    res.format({   
        'application/json': function () {
            res.json(__dirname + '/data.json')
        }
    })

})
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})