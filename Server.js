require('dotenv').config()
const express = require('express')
port = 4000
const app = express()


app.get('/' , (req,res) => {
    res.send('hello worlrrd')
})

app.get('/twitter' , (req,res) => {
    res.send("hello there how are u ")
})

app.get('/youtube' , (req,res) => {
    res.send('hello thre dumboo')
})
app.listen(port ,() => {
    console.log("servr is running on the port 4000")
})
 