
function userAdminCheck (req,res,next) {
    if  (req.session.user !==  undefined ){
        console.log(req.session.user)
        if  (!(req.session.user.rol==="admin")) 
            res.redirect('/')

        next();

    }else {
        res.send("error")
    }
    
}


module.exports = userAdminCheck; 


