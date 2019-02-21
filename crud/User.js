const UserModel = require('../Model/UserModel')

class User{
    static createUser(data){
        const UserModel = new UserModel({
            name: data.name,
            photo: data.photo,
            email:  data.email,
            password: data.password,
            role: data.role    //User or admin?
        })

        UserModel.save(UserModel);
    }

    static getUsers(){
        return UserModel.find();
    }

    getUser(query){
        return UserModel.find(query)
    }

    static updateUser(query,data){
        return UserModel.findOneAndUpdate(
            query,
            {
                name: data.name,
                photo: data.photo,
                email:  data.email,
                password: data.password,
                role: data.role    //User or admin?s
            }
        );
    }
}

module.exports = User;