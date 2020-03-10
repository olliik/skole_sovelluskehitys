module.exports = function(req, res, next) {
    if (req.session.user_id && req.session.username) {
        return next();
    } else {
        return res.status(401).json({error: 'Access denied!' });
    }
}