module.exports = function(req, res, next) {
    if (!req.glob.user_id) return res.redirect('/');
    return next();
};
