
function userAdminCheck (req,res,next) {
    if  (req.session.user!== "Undefined" ){
        if  (req.session.user.rol==="admin"){ 
            next();
        }else {
        res.redirect('/')
    }
    
}
}

module.exports = userAdminCheck; 


