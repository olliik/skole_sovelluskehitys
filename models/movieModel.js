const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    Title: {
        type: String,
        required: true,
        index: { unique: true },
    },
    Year: {
        type: Number,
    },
    Rated: {
        type: String,
    },
    Released: {
        type: String,
    },
    Runtime: {
        type: Number,
    },
    Genre: {
        type: String,
    },
    Director: {
        type: String,
    },
    Writer: {
        type: String,
    },
    Actors: {
        type: String,
    },
    Plot: {
        type: String,
    },
    Language: {
        type: String,
    },
    Country: {
        type: String,
    },
    Awards: {
        type: String,
    },
    Poster: {
        type: String,
    },
    Ratings: {
        type: [String],
    },
    Metascore: {
        type: Number,
    },
    imdbRating: {
        type: Number,
    },
    imdbVotes: {
        type: Number,
    },
    imdbID: {
        type: String,
    },
    Type: {
        type: String,
    },
    DVD: {
        type: String,
    },
    BoxOffice: {
        type: String,
    },
    Production: {
        type: String,
    },
    Website: {
        type: String,
    },
    Response: {
        type: Boolean,
    }
}, { collection: 'Movie' });



const movie = mongoose.model('movies', movieSchema);

module.exports = movie;