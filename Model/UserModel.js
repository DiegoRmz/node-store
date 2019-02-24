const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');


const UserModel = new Schema({
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