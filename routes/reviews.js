const express = require('express');
const router = express.Router();

const moviereviewsController = require('../controllers/reviews');

router.post('/add', moviereviewsController.AddReview);

router.delete('/delete/:reviewId', moviereviewsController.Delete);

router.get('/:reviewId', moviereviewsController.getOne);

router.get('/', moviereviewsController.getAll);

router.get('/user/:username', moviereviewsController.getAllByUser);

module.exports = router;