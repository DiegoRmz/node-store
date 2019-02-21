const Model = require('mongoose').Model;

const ProductModel = new Model({
    barcode:{
                type: String,
                required: true,
                unique: true
            },
    name: String,
    description: String,
    quantity: Number,
    type: String
})

module.exports = mongoose.model('Product',ProductModel);