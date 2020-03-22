const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
    addDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    notes: {
        type: String,
    }
});
const watchlistItem = mongoose.model('watchlistItem', watchlistSchema);

module.exports = watchlistItem;