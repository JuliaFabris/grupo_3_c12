userCheck.js // no va a permitir que si el usuario esta autorizado puede continuar si no lo direccionamos al home
function userAdminCheck(req, res, next) {
    if(req.session.user && req.session.user.rol ==="ROL_USER") {
        next();
    }else {
        res.redirect("/")
    }
}

