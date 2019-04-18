// Kb SRC 001 v4 @ 03:00; approx
const mongoose = require('mongoose');

// Kb SRC 001 v4 @ 03:48; approx
mongoose.model('Book', {
    // title, author, numberPages, publisher
    title: {
        type: String,
        require: true
    },
    author: {
        type: String, 
        require: true
    },
    numberPages: {
        type: Number, 
        require: false
    },
    publisher: {
        type: String, 
        require: false
    },

});