// console.log("Santosh")

//Import area
const express = require('express')

const app = express()
//application

//object.method()
//app.method()

app.get('/', function (req, res) {
    res.send('hello world')
})

app.post('/hello', function (req, res) {
    res.status(201).json({ 'message': "Hello Santosh" })
})

//Export Area 
app.listen(4000)