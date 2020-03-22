const express = require('express');
const router = express.Router();

const moviereviewsController = require('../controllers/reviews');
const userAuth = require('../services/userauth.js');

router.post('/add', moviereviewsController.AddReview);

router.delete('/delete/:reviewId', moviereviewsController.Delete);

router.get('/:reviewId', moviereviewsController.getOne);

router.get('/', moviereviewsController.getAll);

router.get('/user/:userId', moviereviewsController.getAllByUser);

module.exports = router;