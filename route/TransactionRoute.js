const transactionController = require('../controller/TransactionController')

module.exports = function(app){
    app.route('/transaction/new').post(transactionController.createTransaction)
    app.route('/transaction/remove').post(transactionController.deleteTransaction)
    app.route('/transaction/fetch').post(transactionController.getTransaction)
}