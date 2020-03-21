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
        type: String,
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
        Source: String,
        Value: String,
    },
    Metascore: {
        type: Number,
    },
    imdbRating: {
        type: Number,
    },
    imdbVotes: {
        type: String,
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
        type: String,
    }
}, {collection: 'Movie'});



const movie = mongoose.model('Movie', movieSchema);

module.exports = movie;