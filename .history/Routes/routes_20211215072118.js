const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    res.sendFile('../data.json')
})

module.exports.Router = Router