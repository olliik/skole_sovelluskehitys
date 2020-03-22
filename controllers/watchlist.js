const wachlistModel = require('../models/watchlistModel.js');

module.exports = {
    AddItem: async (req, res, next) => {
        const { addDate, createdBy, movie, completed, notes } = req.body;
        //console.log(req.body)
        const newItem = new wachlistModel({
            addDate, createdBy, movie, completed, notes
        });
        await newItem.save();

        res.status(200).json({ message: 'movie added to watchlist' });
    },
    Delete: async (req, res, next) => {
        try {
            const deletedItem = await wachlistModel.deleteOne({ _id: req.params.itemId });
            return res.status(200).json({message: `Review ${deletedItem._id} deleted succesfully.`})

        } catch (err) {
            res.status(400).json({ error: err })
        }
    },
    getOne: async (req, res, next) => {
        try {
            const item = await wachlistModel.findById(req.params.itemId)
            .populate('movie')
            .exec();
            res.status(200).json(item);
        } catch (err) {
            res.json({ message: err })
        }
    },
    getAll: async (req, res, next) => {
        try {
            const items = await wachlistModel.find()
            .populate('movie')
            .exec();
            res.status(200).json(items);
        } catch (err) {
            res.json({ message: err })
        }
    },
    getAllByUser: async (req, res, next) => {
        try {
            const items = await reviewModel.find({createdBy: req.params.userId })
            .populate('movie')
            .exec();
            res.status(200).json(reviews);
        } catch (err) {
            res.json({ message: err })
        }
    }
}