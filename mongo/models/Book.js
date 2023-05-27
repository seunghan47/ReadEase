const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    title: {
        required: true,
        type: String,
        trim: true
    },
    image: {
        required: true,
        type: String,
        trim: true
    },
    rating: {
        required: true,
        type: String,
        trim: true
    },
    userId: {
        required: true,
        type: String,
        trim: true
    }
});

module.exports = Book = mongoose.model('book', bookSchema);
