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


// Get Products
const getProducts = (req, res) => {

    res.json(products);

};

module.exports = {
    addProduct,
    getProducts
};