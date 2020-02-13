const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const movieModel = mongoose.model('movies')

module.exports = (app) => {

    // GET all orders
    router.get('/', async (req, res) => {
        try {
            const movies = await movieModel.find();
            res.json(movies);
            console.log('GET/api/movie/ ' + res)
        } catch (err) {
            res.json({ message: err })
        }
    });

    // GET specific order
    router.get('/:movieId', async (req, res) => {
        try {
            const movie = await movieModel.findById(req.params.movieId)
            res.json(movie);
            console.log('GET/orders/' + req.params.movieId + ' - ' + res)
        } catch (err) {
            res.json({ message: err })
        }
    });

    // Post new order
    router.post('/', async (req, res) => {
        const movie = new movieModel({
            Title: req.body.title,
            Year: req.body.year,
            Rated: req.body.rated,
            Released: req.body.released,
            Runtime: req.body.runtime,
            Genre: req.body.genre,
            Director: req.body.director,
            Writer: req.body.writer,
            Actors: req.body.actors,
            Plot: req.body.plot,
            Language: req.body.language,
            Country: req.body.country,
            Awards: req.body.awards,
            Poster: req.body.poster,
            Ratings: req.body.ratings,
            Metascore: req.body.metascore,
            imdbRating: req.body.imdbRating,
            imdbID: req.body.imdbID,
            Type: req.body.type,
            DVD: req.body.dvd,
            BoxOffice: req.body.boxoffice,
            Production: req.body.production,
            Website: req.body.website,
            Response: req.body.response,
        });
        try {
            const savedMovie = await movie.save()
            res.json(savedMovie);
            console.log('New movie saved: ' + res)
        }
        catch (err) {
            res.json(err);
        }
    });

    // Delete specific order
    router.delete('/:movieId', async (req, res) => {
        try {
            const deletedMovie = await movie.deleteOne({ _id: req.params.movieId });
            res.json(deletedMovie)
            console.log('Order deleted:  ' + res)
        } catch (err) {
            res.json({ message: err })
        }
    });
}