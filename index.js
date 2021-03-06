const cartroute = require('./route/CartRoute')
const productroute = require('./route/ProductRoute')
const transactionroute = require('./route/TransactionRoute')
const userroute = require('./route/UserRoute')

const express           = require('express')
const methodOverride    = require('method-override')
const bodyParser        = require('body-parser')
const http              = require('http')
const mongoose = require('mongoose')


const app = express();


//Parse urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//Parse application/json
app.use(bodyParser.json());

//Allows Cross Origin requests
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/*' , (req,res,next)=>{
    if(req.body.sid == "BASTION"){
        next();
    } 
    else{
        res.status(401).send({"message":"Get outta here!"});
        res.end();
    }
});

cartroute(app);
transactionroute(app);
userroute(app);
productroute(app);

mongoose.connect('mongodb://localhost:27017/my-node-store')
.then(db =>{
    //Listen @ port 3000
    app.listen(3030,()=>{
        console.log('Server listening at port 3030');
    })
}).catch(err => console.log(err));