const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    image: String,
    title: String,
    category : String,
    content: String,
    current : Boolean,
    value: String
})

module.exports = mongoose.model('Posts', PostSchema)