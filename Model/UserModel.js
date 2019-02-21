const schema = require('mongoose').Schema;

const UserSchema = new schema({
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

module.exports = mongoose.model('User',UserSchema);