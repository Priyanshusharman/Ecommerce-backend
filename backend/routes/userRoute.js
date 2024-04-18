const express = require("express");
const router = express.Router();
const {registerUser, loginuser} = require("../controller/userController")

//registation route
router.route("/register").post(registerUser);
router.route("/login").post(loginuser);


module.exports = router