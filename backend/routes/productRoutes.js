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

/* ADD PRODUCT */
router.post("/", verifyToken, addProduct);

/* GET ALL PRODUCTS */
router.get("/", getProducts);

/* SEARCH PRODUCTS */
router.get("/search", searchProducts);

/* UPDATE PRODUCT */
router.put("/:id", verifyToken, updateProduct);

/* DELETE PRODUCT */
router.delete("/:id", verifyToken, deleteProduct);

module.exports = router;