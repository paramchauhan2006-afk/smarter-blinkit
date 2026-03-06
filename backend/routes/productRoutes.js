const express = require("express");
const router = express.Router();

const {
    addProduct,
    getProducts,
    searchProducts
} = require("../controllers/productController");

router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/search", searchProducts);

module.exports = router;