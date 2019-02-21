const Product = require('../crud/Product')

exports.updateProduct = function(req,res){
    Product.updateProduct(req.body.query, req.body.payload)
    .then(opSuccess=>{
        res.json(opSuccess);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);  //It doesn't hide the error properly
    })
}

exports.createProduct = function(req,res){
    Product.createProduct(req.body.payload)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getProduct = function(req,res){
    Product.getProduct(req.body.query)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getProducts = function(req,res){
    Product.getProducts()
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}