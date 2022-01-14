function cookieSession (req, res, next) {
    if(req.cookies.userTriMovi){
        req.session.user = req.cookies.userTriMovi;
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession