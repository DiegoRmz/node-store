const UserController = require('../controller/UserController')

module.exports = function(app){
    app.route('/User/new').post(UserController.createUser)
    app.route('/User/update').post(UserController.updateUser)
    app.route('/User/get-one').post(UserController.getUser)
    app.route('/User/get-many').post(UserController.getUsers)
}