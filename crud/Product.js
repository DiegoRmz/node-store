const ProductModel = require('../Model/ProductModel')

class Product{
    static createProduct(data){
        const productModel = new ProductModel({
            barcode: data.barcode,
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            type: data.type,
            photo: data.photo
        })

        return productModel.save(productModel);
    }

    static getProducts(){
        return ProductModel.find();
    }

    static getProduct(query){
        return ProductModel.find(query);
    }

    static updateProduct(query,dataToUpdate){
        return ProductModel.findOneAndUpdate(
            query,
            {
                barcode: dataToUpdate.barcode,
                name: dataToUpdate.name,
                description: dataToUpdate.description,
                quantity: dataToUpdate.quantity,
                type: dataToUpdate.type,
                photo: data.photo
            }
        );
    }
}

module.exports = Product;