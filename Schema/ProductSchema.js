const schema = require('mongoose').Schema;

const ProductSchema = new schema({
    barcode:{
                type: String,
                required: true,
                unique: true
            },
    name: String,
    description: String,
    Quantity: Number,
    Type: String
})

module.exports = mongoose.model('Product',ProductSchema);