const createError = require("http-errors");
/* 
1 => admin
2 => user
 */
function userAdminCheck (req,res,next) {
    if  (req.session.user.rolId !== 1){
        console.log(req.session.user)
        
        return next(createError(403));

    }

    return next();
}

module.exports = userAdminCheck; 


