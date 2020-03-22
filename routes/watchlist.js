const express = require('express');
const router = express.Router();

const watchlistController = require('../controllers/watchlist');

router.post('/add', watchlistController.AddItem);

router.delete('/delete/:itemId', watchlistController.Delete);

router.get('/:itemId', watchlistController.getOne);

router.get('/', watchlistController.getAll);

router.get('/:userId', watchlistController.getAllByUser);

module.exports = router;