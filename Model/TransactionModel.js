const Model = require('mongoose').Model;

const TransactionModel = new Model({
    date: String,
    userMail: String,
    quantity: String,
    cartId: Number
})

module.exports = mongoose.model('Transaction',TransactionModel);