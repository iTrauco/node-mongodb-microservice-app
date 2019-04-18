// =================================================
// Config
const express = require('express');
const app = express();
// Kb SRC 001 v4 @ 07:32; approx
const bodyParser = require('body-parser');
// Kb SRC 001 v4 @ 08:30; approx
app.use(bodyParser.json());
//load mongoose
const mongoose = require('mongoose');
// =================================================

// =================================================
// Connect Config
const PORT = 4545;
// =================================================

// =================================================
// Route Config | Kb SRC 001 v6 @ 02:13; approx | Pro Tip: C
require("./Book")
const Book = mongoose.model('Book')
// =================================================

// =================================================
// Kb SRC 001 v3 @ 05:52, approx
// http://bit.ly/2Gvpq5d Resolves error (node:33884) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect('mongodb+srv://Trauco-Admin:SUevc5niqdWlehLe@cluster0-ab5qk.mongodb.net/test?retryWrites=true', () => {
    console.log('Now connected to MongoDB!')
});
// =================================================

// =================================================
app.get('/', (req, res) => {
    res.send("This is the book services main endpoint!")
})
// =================================================

// =================================================
// Save JSON Response to DB | Kb SRC 001 v4 @ 01:50; approx 
app.post('/book', (req, res) => {
    // var newBook = {
    const newBook = {
    // let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }
    // Kb SRC 001 v6 @ 07:00 - 07:20; approx
    // Create a new Book with the above attributes
    var book = new Book(newBook)
    // TDD const and let
    // const book = new Book(newBook)
    // let book = new Book(newBook)

    // Kb SRC 001 v6 @ 07:50; approx
    book.save().then(() => {
        console.log('New Book created!')
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send('Booked added to MongoDB')

        // =========================================
        // console.log(req.body);
        // // Kb SRC 001 v5 @ 00:52; approx
        // res.send("00:D");
        // =========================================
});
// =================================================

// =================================================
app.listen(PORT, () => {
    console.log(`Books service now listening on port ${PORT}.`);
})
// =================================================
