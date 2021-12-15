const express = require('express')

const router = express.Router()
const data = require('../data.json')

router.get('/api', (req, res) => {
    console.log(data)
    res.send(data)
})

module.exports = router