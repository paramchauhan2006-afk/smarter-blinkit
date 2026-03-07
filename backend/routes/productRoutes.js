const express = require("express");
const router = express.Router();

const {
    addProduct,
    getProducts,
    searchProducts,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/products", verifyToken, addProduct);
router.get("/products", getProducts);
router.get("/products/search", searchProducts);

router.put("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

module.exports = router;