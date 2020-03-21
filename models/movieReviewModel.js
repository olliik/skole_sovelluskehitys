const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieReviewSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    createdBy: {
        type: String,
        required: true,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
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
const movieReview = mongoose.model('movieReview', movieReviewSchema);

movieReview.findOne({})
.populate('Movie')
.exec((err, movie) => {
    //console.log(movie); 
})

module.exports = movieReview;