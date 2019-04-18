// Load express
const express = require('express');
const app = express();

const PORT = 4545;

app.get('/', (req, res) => {
    res.send("This is the main endpoint!")
})

app.listen(PORT, () => {
    console.log(`Books service now listening on port ${PORT}.`);
})

