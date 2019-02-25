const TransactionModel = require('../Model/TransactionModel')

class Transaction{
    static createTransaction(data){
        const transactionModel = new TransactionModel({
            date: data.date,
            userMail: data.userMail,
            quantity: data.quantity,
            cartId: data.cartId
        })

        return transactionModel.save(transactionModel);
    }

    static getTransactions(query){
        return TransactionModel.find(query);
    }

    static removeTransaction(query){
        return TransactionModel.findOneAndRemove(query);
    }
}

module.exports = Transaction;