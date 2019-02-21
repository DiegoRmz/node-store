const schema = require('mongoose').Schema;

const CartSchema = new schema({
    productCode: String,
    userMail: String
})

module.exports = mongoose.model('Cart',CartSchema);