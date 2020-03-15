const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies');

router.post('/add', movieController.AddMovie);

router.delete('/delete/:movieId', movieController.Delete);

router.get('/:movieId', movieController.getOne);

router.get('/', movieController.getAll);

module.exports = router;