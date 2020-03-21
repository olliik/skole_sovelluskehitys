const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 1000000 }
  }))

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('Connected to database');
});

// Models
require('./models/movieModel');
require('./models/userModel');
require('./models/moviereviewModel');

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
app.use('/api/reviews', require('./routes/reviews'));


app.listen(process.env.PORT_DEV, () => {
    console.log('Server listening on PORT: ', process.env.PORT_DEV);
});
module.exports = app;
