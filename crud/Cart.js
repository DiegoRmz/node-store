const CartModel = require('../Model/CartModel')

class Cart{
    static createCart(data){
        const CartModel = new CartModel({
            products: data.products,
            userMail: data.userMail
        })

        CartModel.save(CartModel);
    }

    static getCarts(query){
        return CartModel.find(query);
    }

    static updateCart(query,dataToUpdate){
        return CartModel.findOneAndUpdate(
            query,
            {
                products: dataToUpdate.products,
                userMail: dataToUpdate.userMail
            }
        );
    }
}

module.exports = Cart;