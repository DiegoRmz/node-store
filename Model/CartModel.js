const Model = require('mongoose').Model;

const CartModel = new Model({
    products: { type : Array , "default" : [] },
    userMail: String
})

module.exports = mongoose.model('Cart',CartModel);