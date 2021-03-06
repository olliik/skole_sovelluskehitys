const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());

//const PORT = process.env.ENV === 'PROD' ? process.env.PORT : process.env.PORT_DEV || 8001;
const PORT = process.env.PORT || process.env.PORT_DEV ;
var serveStatic = require('serve-static');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(serveStatic(__dirname + "/vueapp/dist"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 1000000 }
  }))

const db = process.env.MONGODB_URL;

mongoose.connect(db || process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('Connected to database');
});

// Models
require('./models/movieModel');
require('./models/userModel');
require('./models/movieReviewModel');
require('./models/watchlistModel');

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/watchlist', require('./routes/watchlist'));

if(process.env.NODE_ENV === 'production') {
  
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/vueapp/dist/index.html'));
}

app.listen(PORT, () => {
    console.log('Server listening on PORT: ', PORT);
});
module.exports = app;
