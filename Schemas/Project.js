const mongoose = require('mongoose')
const ProjectSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
})
const ProjectModel = mongoose.models.Project || mongoose.model("Project", ProjectSchema)
module.exports = ProjectModel;