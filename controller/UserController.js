const User = require('../crud/User')

exports.updateUser = function(req,res){
    User.updateUser(req.body.query, req.body.payload)
    .then(opSuccess=>{
        res.json(opSuccess);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);  //It doesn't hide the error properly
    })
}

exports.createUser = function(req,res){
    User.createUser(req.body.payload)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getUser = function(req,res){
    User.getUser(req.body.query)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getUsers = function(req,res){
    User.getUsers()
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}