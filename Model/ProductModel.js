const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');


const ProductModel = new Schema({
    barcode:{
                type: String,
                required: true,
                unique: true
            },
    name: String,
    description: String,
    quantity: Number,
    type: String,
    photo: String
})

module.exports = mongoose.model('Product',ProductModel);