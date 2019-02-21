const schema = require('mongoose').Schema;

const TransactionSchema = new schema({
    date: String,
    userMail: String,
    quantity: String,
    cartId: Number
})

module.exports = mongoose.model('Transaction',TransactionSchema);