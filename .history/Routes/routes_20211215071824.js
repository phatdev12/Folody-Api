const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    res.sendFile('../data.json')
})

export default Router