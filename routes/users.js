const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage(); // The memory storage engine stores the files in memory as Buffer objects. It doesn't have any options.
const uploadImage = multer({ storage: storage });

const usersController = require('../controllers/users');
const userauth = require('../services/userauth');


router.post('/register', usersController.Register);

router.post('/login', usersController.Login);

router.post('/logout', usersController.Logout);

router.get('/:userID', usersController.getUser);

router.get('/', usersController.getAll);

router.put('/:userID', uploadImage.single('avatar'), usersController.updateUserData);

module.exports = router;
