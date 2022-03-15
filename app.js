'use strict'

const express = require('express')
const path = require('path')

const app = express()
app.use("/static", express.static('./static/'))
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname })
    console.log("connected")
});


let port = process.env.PORT || 3000 
app.listen(port,() => {
    console.log(`Listening on port ${port}...`)
})
