// Load express
const express = require('express');
const app = express();
// Kb SRC 001 v4 @ 07:32; approx
const bodyParser = require('body-parser');
// Kb SRC 001 v4 @ 08:30; approx
app.use(bodyParser.json());
//load mongoose
const mongoose = require('mongoose');

    // Kb SRC 001 v3 @ 05:52, approx
    // http://bit.ly/2Gvpq5d Resolves error (node:33884) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
    mongoose.connect('mongodb+srv://Trauco-Admin:SUevc5niqdWlehLe@cluster0-ab5qk.mongodb.net/test?retryWrites=true', () => {
        console.log('Now connected to MongoDB!')
    });

const PORT = 4545;

app.get('/', (req, res) => {
    res.send("This is the main endpoint!")
})

// Kb SRC 001 v4 @ 01:50; approx 
app.post('/book', (req, res) => {
        console.log(req.body);
    // Kb SRC 001 v5 @ 00:52; approx
    res.send("00:D");
});

app.listen(PORT, () => {
    console.log(`Books service now listening on port ${PORT}.`);
})

