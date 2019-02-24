const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');


const TransactionModel = new Schema({
    date: String,
    userMail: String,
    quantity: String,
    cartId: Number
})

module.exports = mongoose.model('Transaction',TransactionModel);