const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const CartModel = new Schema({
    products: { type : Array , "default" : [] },
    userMail: String
})

module.exports = mongoose.model('Cart',CartModel);