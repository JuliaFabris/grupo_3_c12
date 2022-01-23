function cookieSession (req, res, next) {
    if(req.cookies.userTrimovie){
        req.session.user = req.cookies.userTrimovie;
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession