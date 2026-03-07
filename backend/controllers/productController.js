const Product = require("../models/Product");

let products = [];


// Add Product
const addProduct = (req, res) => {

    const { name, price, category, stock, sellerId, barcode } = req.body;

    const newProduct = new Product(
        name,
        price,
        category,
        stock,
        sellerId,
        barcode
    );

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
};


// Get All Products
const getProducts = (req, res) => {

    res.json(products);

};


// Search Products
const searchProducts = (req, res) => {

    const query = req.query.q;

    if (!query) {
        return res.json(products);
    }

    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    res.json(results);

};


// Update Product
const updateProduct = (req, res) => {

    const productId = parseInt(req.params.id);

    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, category, stock } = req.body;

    if (name) product.name = name;
    if (price) product.price = price;
    if (category) product.category = category;
    if (stock) product.stock = stock;

    res.json({
        message: "Product updated successfully",
        product
    });

};


// Delete Product
const deleteProduct = (req, res) => {

    const productId = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.json({
        message: "Product deleted successfully"
    });

};


module.exports = {
    addProduct,
    getProducts,
    searchProducts,
    updateProduct,
    deleteProduct
};