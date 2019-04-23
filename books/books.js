// =================================================
// books.js Config 
const express = require('express');
const app = express();
// Kb SRC 002 v4 @ 07:32; approx
const bodyParser = require('body-parser');
// Kb SRC 002 v4 @ 08:30; approx
app.use(bodyParser.json());
//load mongoose
const mongoose = require('mongoose');
// =================================================
// PORT CONFIG
const PORT = 4545;
// =================================================
// ROUTE CONFIG TO Db via Mongoose | Kb SRC 002 v6 @ 02:13; approx
require("./Book")
    const Book = mongoose.model('Book')
// =================================================
// Kb SRC 002 v3 @ 05:52, approx
// http://bit.ly/2Gvpq5d | Resolves error (node:33884) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect('mongodb+srv://Trauco-Admin:SUevc5niqdWlehLe@cluster0-ab5qk.mongodb.net/test?retryWrites=true', () => {
    console.log('Now connected to MongoDB!')
});
// =================================================
// MAIN ENDPOINT
app.get('/', (req, res) => {
    res.send("Main endpoint of books services.")
})
// =================================================
// Save JSON to DB | Kb SRC 002 v4 @ 01:50; approx 
app.post('/book', (req, res) => {
    
     const newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }  
// =================================================
// ADD NEW BOOK TO DB | Kb SRC 002 v6 @ 07:00 - 07:20; approx
const book = new Book(newBook)
    // Kb SRC 002 v6 @ 07:50; approx
    book.save().then(() => {
        console.log('New Book created!')
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send('Booked added to MongoDB')
})
    // TDD
    // =========================================
    // console.log(req.body);
    // Kb SRC 002 v5 @ 00:52; approx
    // res.send("00:D");
    // =========================================
    // TDD END
// =================================================
// GET DB BOOKS ROUTE | Kb SRC 002 v7 @ 00:45; approx
//TDD | Remote Support
//
//
app.get('/books', (req, res) => {
    //TDD
    // =====================================
    // console.log(req.body);
    // console.log(res.send("00:D"));
    // TDD | Remote Support Above
    Book.find().then((books) => {
    // console.log(books) 
        res.json(books)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
});
// =================================================
// GET ONE BOOK BY ID | Kb SRC 002 v7 @ 04:27; approx
app.get('/book/:id', (req, res) => {
    // TDD =========================================
    Book.findById(req.params.id).then((book) => {
    // res.send(req.params.id)
    // ============================================
    // DOES BOOK DATA EXIST? | Kb SRC 002 v7 @ 10:37; approx
    if(book){
        // BOOK DATA
        res.json(book)
    }else{
        res.sendStatus(404);
    }
    // ============================================
    }).catch(err => {
        if(err) {
            throw err;
        }
    })
})
// =================================================
// DELETE BOOK IN DB | Kb SRC 002 v8 @ 00:38; approx
app.delete('/book/:id', (req, res) => {
   // Kb SRC 002 v8 @ 02:00; approx
   
})
// =================================================
app.listen(PORT, () => {
    console.log(`Books service now listening on port ${PORT}.`);
})      // End
// =================================================