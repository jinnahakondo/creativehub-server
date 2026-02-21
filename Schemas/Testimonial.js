const mongoose = require('mongoose')
const TestimonialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },

})
const TestimonialsModel = mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialsSchema)
module.exports = TestimonialsModel;