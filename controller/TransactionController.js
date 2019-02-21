const Transaction = require('../crud/Transaction')

exports.deleteTransaction = function(req,res){
    Transaction.removeTransaction(req.body.query)
    .then(opSuccess=>{
        res.json(opSuccess);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);  //It doesn't hide the error properly
    })
}

exports.createTransaction = function(req,res){
    Transaction.createTransaction(req.body.payload)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

exports.getTransaction = function(req,res){
    Transaction.getTransaction(req.body.query)
    .then(success=>{
        res.json(success);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}