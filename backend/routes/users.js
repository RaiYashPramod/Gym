const express = require('express');
const { loginUser, signUser } = require('../controllers/userController')

const router = express.Router()

//Login
router.post('/login', loginUser);

//Sign Up
router.post('/signup', signUser);

module.exports = router;