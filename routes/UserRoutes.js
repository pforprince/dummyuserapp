const express= require("express");
const { saveUser, loginUser } = require("../controllers/UserController");
const router= express.Router();

router.post("/", saveUser);
router.post("/login", loginUser)


module.exports= router;
