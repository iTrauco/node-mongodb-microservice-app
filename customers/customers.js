const express = require('express')
const app = express()

const PORT = 5555;
app.listen(PORT, () => {
    console.log(`Customers service now listening on port ${PORT}!`)
})