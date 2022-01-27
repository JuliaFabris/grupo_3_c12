const fs = require('fs');
const path = require ('path');


function userLogs(req, res, next){
    fs.appendFileSync(path.join(__dirname,'../database/userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`))
    next()
} 

module.exports = userLogs; //se exporta la funcion