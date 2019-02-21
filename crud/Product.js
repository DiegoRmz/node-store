const ProductModel = require('../Schema/ProductSchema')

class Product{
    constructor(mongooseConnection){
        this.mongooseConnection = mongooseConnection;
    }

    createProduct(data){
        const productSchema = new ProductModel({
            barcode: data.barcode,
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            type: data.type
        })
    }

    getProducts(data){

    }

    updateProduct(data){

    }
}

module.exports = Product;