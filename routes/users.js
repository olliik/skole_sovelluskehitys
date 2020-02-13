const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const userauth = require('../services/userauth');


router.post('/register', usersController.Register);

router.post('/login', usersController.Login);

router.post('/logout', usersController.Logout);

module.exports = router;
