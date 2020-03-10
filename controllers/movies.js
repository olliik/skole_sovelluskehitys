const movieModel = require('../models/movieModel');

module.exports = {
    AddMovie: async (req, res, next) => {
        const { Title, Year, Rated, Released, Runtime,
            Genre, Director, Writer, Actors, Plot, Language,
            Country, Awards, Poster, Ratings, Metascore, imdbRating,
            imdbVotes, imdbID, Type, DVD, BoxOffice, Production,
            Website, Response } = req.body;
        //console.log(req.body)
        if (await movieModel.findOne({ imdbID })) {
            return res.status(403).json({ error: 'Movie already exists!' });
        }
        const newMovie = new movieModel({
            Title, Year, Rated, Released, Runtime, Genre,
            Director, Writer, Actors, Plot, Language, Country,
            Awards, Poster, Ratings, Metascore, imdbRating,
            imdbVotes, imdbID, Type, DVD, BoxOffice, Production,
            Website, Response
        });

        await newMovie.save();

        res.status(200).json({ message: 'new movie added' });
    },
    Delete: async (req, res, next) => {
        try {
            const deletedMovie = await movieModel.deleteOne({ _id: req.params.movieId });
            return res.status(200).json({message: `Movie ${deletedMovie._id} deleted succesfully.`})

        } catch (err) {
            res.status(400).json({ error: err })
        }
    },
    getOne: async (req, res, next) => {
        try {
            const movie = await movieModel.findById(req.params.movieId)
            res.status(200).json(movie);
        } catch (err) {
            res.json({ message: err })
        }
    },
    getAll: async (req, res, next) => {
        try {
            const movies = await movieModel.find();
            res.status(200).json(movies);
        } catch (err) {
            res.json({ message: err })
        }
    }
}