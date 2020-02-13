const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// LOGIN
router.get('/login', function(req, res, next) {
  if(!req.session.user) {
    res.sendFile('login.html', { root: './views'});
  } else next();
});

router.post('/login', function(req, res, next) {
  const username = req.body.username;
  userModel.findOne({
    name: username,
  }).then((user) => {
    if(user) {
      req.session.user = user;
      return res.redirect('/');
    }
    return res.redirect('/login')
  })
});
//LOGIN END

// LOGOUT
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        } else {
            return res.redirect('/');
        }
    });
  }
});
//LOGOUT END

// REGISTER
router.get('/register', function(req, res, next) {
  res.sendFile('register.html', { root: './views'});
});

router.post('/register', function(req, res, next) {
  const username = req.body.username;
  const _password = req.body.password;
  userModel.findOne({
    name: username
  }).then((user) => {
    if (user) {
      return res.send('User already taken');
    }
    let newUser = new userModel({
      name: username,
      password: _password,
    });
    newUser.save().then(() => {
      return res.redirect('/login');
    })
  });
});
//REGISTER END



module.exports = router;
