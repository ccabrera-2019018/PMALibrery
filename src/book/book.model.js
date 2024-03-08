import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        unique: [true, 'title already exists'],
        lowercase: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: String,
        minLength: [4, 'invalid year'],
        required: true
    },
    editionNumber: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

//pre mongoose

export default mongoose.model('Book', bookSchema)