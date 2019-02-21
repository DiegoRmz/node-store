const mongoose = require('mongoose');

class MongooseConnection{
    constructor(server,database){
        this.server = server;
        this.database=database;
    }

    connect(){
        return mongoose.connect('mongodb://'+this.server+"/"+this.database)
    }
}

module.exports = MongooseConnection;