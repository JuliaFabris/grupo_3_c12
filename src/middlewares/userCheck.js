function userCheck(req, res, next) {
    if(req.session.user && req.session.user.rol ==="user") {
        next();
    }else {
        res.redirect("/")
    }
}