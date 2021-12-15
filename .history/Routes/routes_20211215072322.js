const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('../data.json')
})

module.exports = router