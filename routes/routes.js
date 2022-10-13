const express = require ('express');
const authController = require('../controllers/authController');
const loginController = require('../controllers/loginController');
const router = express.Router();
router.post("/adduser", authController.add_user);
router.post("/login", loginController.loginUser);
module.exports = router;