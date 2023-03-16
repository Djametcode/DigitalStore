const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProdcutById,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

router.post("/product", createProduct);
router.get("/product", getAllProduct);
router.get("/product/:Id", getProdcutById);
router.patch("/product/:Id", updateProduct);
router.delete("/product/:Id", deleteProduct);

module.exports = router;
