const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: String,
    inStock: {
        type: Boolean,
        default: true
    },

    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Product', ProductSchema);
