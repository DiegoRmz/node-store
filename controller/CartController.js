const cart = require('../crud/Cart')

exports.addOrRemoveProduct = function(req,res){
    cart.updateCart(req.body.query, req.body.payload)
    .then(opSuccess=>{
        res.json(opSuccess);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);  //It doesn't hide the error properly
    })
}

exports.createCart = function(req,res){
    cart.createCart(req.body.payload)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getCart = function(req,res){
    cart.getCarts(req.body.query)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}