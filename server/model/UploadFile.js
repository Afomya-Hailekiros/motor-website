const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
})

const  UploadFile= mongoose.model('Upload', UploadSchema)

module.exports = UploadFile
