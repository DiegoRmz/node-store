const Model = require('mongoose').Model;

const UserModel = new Model({
    name: String,
    photo: String,
    email:  {
                type: String,
                required: true,
                unique: true
            },
    password: String,
    role: String    //User or admin?
})

module.exports = mongoose.model('User',UserModel);