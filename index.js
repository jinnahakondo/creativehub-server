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
app.get('/projects', async (req, res) => {
    try {
        const result = await ProjectModel.find()
        res.status(200).send({ result })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

//post
app.post('/projects', async (req, res) => {
    const newProject = req.body;
    try {
        const result = await ProjectModel.create(newProject)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

//update
app.patch('/projects/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ProjectModel.updateOne({ _id: id }, { $set: req.body })
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

//delete
app.delete('/projects/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ProjectModel.deleteOne({ _id: id })
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

//testimonials....
//get
app.get('/testimonials', async (req, res) => {
    try {
        const result = await ProjectModel.find()
        res.status(200).send({ result })
    } catch (error) {
        res.send({ status: 'error', message: error.message })
    }
})

//post
app.post('/testimonials', async (req, res) => {
    const newProject = req.body;
    try {
        const result = await ProjectModel.create(newProject)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

//update
app.patch('/testimonials/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ProjectModel.updateOne({ _id: id }, { $set: req.body })
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

//delete
app.delete('/testimonials/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await ProjectModel.deleteOne({ _id: id })
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
