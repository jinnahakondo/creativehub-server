const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
const port = 3000

mongoose.connect(process.env.URI)
    .then(console.log('mongodb connected'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
