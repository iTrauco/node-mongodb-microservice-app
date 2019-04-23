const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// =================================================
// PORT CONFIG
const PORT = 5555;


require('./Customer')
const Customer = mongoose.model('Customer')
// =================================================
// ROUTE CONFIG TO Db via Mongoose | // =================================================
mongoose.connect('mongodb+srv://dc-admin:dazygorkinic@cluster0-qfwgf.mongodb.net/test?retryWrites=true', () => {
    console.log(`Now connected to MongoDB`)
});
// =================================================
// Load Customer Model 
// require('./Customer')
// const Customer = mongoose.model('Customer')

app.post('/customer', (req, res) => {

    const newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }

    const customer = new Customer(newCustomer)

    customer.save().then(() => {
    //   console.log('New Customer created')
    }).catch((err) => {
            if(err) {
                throw err;
            }
    })
    res.send('New Customer created')
})

// =================================================
app.listen(PORT, () => {
    console.log(`Customers Service - Now listening on port ${PORT}!`);
})
