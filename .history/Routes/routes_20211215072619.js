const express = require('express')

const router = express.Router()
const data = {
    type: "audio/mp3",
    song: "Lạ lùng",
    url: "https://bit.ly/3INh0UM",
    artist: "Vũ",
    keyword: ["Vũ", "Lạ lùng", "Lạ Lùng"]
}

router.get('/', (req, res) => {
    res.send(data)
})

module.exports = router