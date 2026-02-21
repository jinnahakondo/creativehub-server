const express = require('express')
const mongoose = require('mongoose');
const ProjectModel = require('./Schemas/Project');
require('dotenv').config()
const app = express()
app.use(express.json())
const port = 3000

mongoose.connect(process.env.URI)
    .then(console.log('mongodb connected'))
    .catch(console.log('mongodb connection error'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})



//all apis here....
//project related apis...
//get
app.get('/api/projects', async (req, res) => {
    try {
        const result = await ProjectModel.find()
        res.status(200).send({ result })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

//post
app.post('/api/projects', async (req, res) => {
    const newProject = req.body;
    try {
        const result = await ProjectModel.create(newProject)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
