const express = require("express");
const router = express.Router();
const { register, getAllUser, login } = require("../controller/auth");

router.get("/user", getAllUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
