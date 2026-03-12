const Product = require('../models/Product');

class ProductApiController {

    // function to create a new product
    async createProduct(req, res) {
        try {
            const { name, description, price, category, inStock } = req.body;

            const product = await Product.create({
                name,
                description,
                price,
                category,
                inStock
            });

            return res.status(201).json({
                success: true,
                message: "product added",
                data: product
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    // get all the products from the collections
    async getProducts(req, res) {
        try {
            const products = await Product.find();

            return res.status(200).json({
                success: true,
                count: products.length,
                message: "all products",
                data: products
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    // fetch a single product using its id
    async getProduct(req, res) {
        try {
            const product = await Product.findById(req.params.id);

            if (!product) {
                return res.status(404).json({ message: 'product not found' });
            }

            return res.status(200).json({
                success: true,
                data: product
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    // update an existing product
    async updateProduct(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });

            if (!product) {
                return res.status(404).json({ message: 'product not found' });
            }

            return res.status(200).json({
                success: true,
                message: "updated successfully",
                data: product
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }

    // remove a product from database
    async deleteProduct(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);

            if (!product) {
                return res.status(404).json({ message: 'product not found' });
            }

            return res.status(200).json({
                success: true,
                message: 'deleted'
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
}

module.exports = new ProductApiController();
