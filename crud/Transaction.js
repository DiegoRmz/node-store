const TransactionModel = require('../Model/TransactionModel')

class Transaction{
    static createTransaction(data){
        const TransactionModel = new TransactionModel({
            date: data.date,
            userMail: data.userMail,
            quantity: data.quantity,
            cartId: data.cartId
        })

        TransactionModel.save(TransactionModel);
    }

    static getTransactions(query){
        return TransactionModel.find(query);
    }

    static removeTransaction(query){
        return TransactionModel.findOneAndUpdate(query);
    }
}

module.exports = Transaction;