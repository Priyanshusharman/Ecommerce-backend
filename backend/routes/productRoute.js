const express = require("express");
const { getAllProducts, CreateProduct,updateproducts,deleteProducts,getProductdetail } = require("../controller/productController");
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/new").post(CreateProduct);
router.route("/product/:id").put(updateproducts).delete(deleteProducts).get(getProductdetail);



module.exports = router;