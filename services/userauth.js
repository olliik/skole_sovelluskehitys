module.exports = function(req, res, next) {
    if (req.session.user_id && req.session.username) return next();
    else res.status(401).send('Access denied!');
}