const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    name: {
        type:String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'category'
    }
})

module.exports = mongoose.model('product',productSchema);