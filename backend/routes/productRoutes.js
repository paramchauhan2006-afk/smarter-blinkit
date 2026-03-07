const express = require("express");
const router = express.Router();

const {
    addProduct,
    getProducts,
    searchProducts,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/search", searchProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;