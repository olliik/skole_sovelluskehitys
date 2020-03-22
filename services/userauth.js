const userModel = require('../models/userModel');

module.exports = function(req, res, next) {
    console.log(req.session)
    console.log('executing userauth');
    if (req.session.user_id && req.session.username) {
        userModel.findById(req.session.user_id).then((user) => {
            req.user = user;
            return next();
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({error: 'User nor found!'});
        })
    } else {
        return res.status(401).json({error: 'Access denied!' });
    }
}