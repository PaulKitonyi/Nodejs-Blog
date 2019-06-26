let mongoose = require('mongoose');

let Post = mongoose.model('Posts', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    content: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    }
});

module.exports = {Post};