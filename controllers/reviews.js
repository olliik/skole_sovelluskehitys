const reviewModel = require('../models/moviereviewModel');

module.exports = {
    AddReview: async (req, res, next) => {
        const { createdBy, movie, review, rating } = req.body;
        //console.log(req.body)
        const newReview = new reviewModel({
            createdBy, movie, review, rating
        });
        await newReview.save();

        res.status(200).json({ message: 'new rating saved' });
    },
    Delete: async (req, res, next) => {
        try {
            const deletedReview = await reviewModel.deleteOne({ _id: req.params.reviewId });
            return res.status(200).json({message: `Review ${deletedReview._id} deleted succesfully.`})

        } catch (err) {
            res.status(400).json({ error: err })
        }
    },
    getOne: async (req, res, next) => {
        try {
            const review = await reviewModel.findById(req.params.reviewId)
            res.status(200).json(review);
        } catch (err) {
            res.json({ message: err })
        }
    },
    getAll: async (req, res, next) => {
        try {
            const reviews = await reviewModel.find()
            .populate('movie')
            .exec();
            res.status(200).json(reviews);
        } catch (err) {
            res.json({ message: err })
        }
    },
    getAllByUser: async (req, res, next) => {
        try {
            //const reviews = await reviewModel.find({createdBy: req.params.userId});
            const reviews = await reviewModel.find({createdBy: req.params.userId })
            .populate('movie')
            .exec();
            res.status(200).json(reviews);
        } catch (err) {
            res.json({ message: err })
        }
    }
}