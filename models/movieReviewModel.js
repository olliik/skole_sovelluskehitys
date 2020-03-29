const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieReviewSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true,
    },
    review: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
    }
});
const movieReview = mongoose.model('movieReviews', movieReviewSchema);

movieReview.findOne({})
.populate('movie')
.exec((err, movie) => {
    console.log(movie); 
})

module.exports = movieReview;