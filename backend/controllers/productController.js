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


module.exports = {
    addProduct,
    getProducts,
    searchProducts
};