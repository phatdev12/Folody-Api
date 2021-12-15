const express = require('express')
const bodyParser = require("body-parser")
const usersRouter = require("./Routes/users")
const { v4: uuidv4 } = require('uuid');

const app = express()
const router = express.Router()
const users = [
    {
        type: "audio/mp3",
        song: "Lạ lùng",
        url: "https://bit.ly/3INh0UM",
        artist: "Vũ",
        keyword: ["Vũ", "Lạ lùng", "Lạ Lùng"]
    },
    {
        type: "audio/mp3",
        song: "Bước qua mùa cô đơn",
        url: "https://bit.ly/3dQ4iGx",
        artist: "Vũ",
        keyword: ["Vũ", "Bước qua mùa cô đơn", "Bước Qua Mùa Cô Đơn", "cô đơn", "Cô Đơn", "mùa thu", "Mùa thu", "Mùa Thu"]
    }
]
app.use(bodyParser.json())
app.get('/users', (req, res) => {
    const user = req.body
    const userWithID = { ...user, id: uuidv4() }
    users.push(userWithID)
    res.sendFile(__dirname + '/data.json')
})

app.get('/', (req, res) => res.send("this is api"))
app.listen(3001, function(){
    console.log('App started http://localhost:3001')
})