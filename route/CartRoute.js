const cartController = require('../controller/CartController')

module.exports = function(app){
    app.route('/cart/new').post(cartController.createCart)
    app.route('/cart/update').post(cartController.addOrRemoveProduct)
    app.route('/cart/fetch').post(cartController.getCart)
}