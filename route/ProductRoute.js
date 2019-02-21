const productController = require('../controller/ProductController')

module.exports = function(app){
    app.route('/product/new').post(productController.createProduct)
    app.route('/product/update').post(productController.updateProduct)
    app.route('/product/get-one').post(productController.getProduct)
    app.route('/product/get-many').post(productController.getProducts)
}