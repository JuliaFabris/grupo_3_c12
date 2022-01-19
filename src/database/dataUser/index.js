const res = require('express/lib/response')
let fs = require('fs')


let backUser = JSON.parse(fs.readFileSync('./src/database/dataUser/backUsuario.json', 'utf-8'))
let dataUser = JSON.parse(fs.readFileSync('./src/database/dataUser/users.json', 'utf-8'))

let newID = () => {
    let aux = 0
    if(!dataUser.length>0) return 1;

    dataUser.forEach(pelicula => {
        aux = pelicula.id>aux? pelicula.id : aux;
    })

    return aux+1
}


let datosUnicos = (user, pass) => {
    backUser.forEach(backData => {
        if(backData.user == user || backData.pass == pass){
            return false
        }
    })
    return true
}
module.exports = {
    "login": (user, pass) => {
        let backData = backUser.find(data => data.user==user && data.pass==pass)
        // const token = backData.user[2]+backData.pass[5]+Date.now().toString()+backData.id
        if(backData != undefined){
            let usuario = dataUser.find(data => data.id == backData.id)
            // usuario.token = token
            fs.writeFileSync('./src/database/cache.json', JSON.stringify(usuario), 'utf-8')
            return true
        }
        return false
    },

    "register": (user, pass, usuario) => {
        if(datosUnicos(user, pass)){
            usuario.id = newID();
            backUser.push({"user": user, "pass": pass, "id": usuario.id});
            dataUser.push(usuario);
            fs.writeFileSync('./src/database/dataUser/usuarios.json', JSON.stringify(dataUser), 'utf-8')
            fs.writeFileSync('./src/database/dataUser/backUsuario.json', JSON.stringify(backUser), 'utf-8')
            res.redirect('/user/login')
        }else res.send("error en la creacion")
    },
"users": JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    "writeUsersJSON": (data) => {
        fs.writeFileSync(path.join(__dirname, "../database/dataUser/users.json"), JSON.stringify(data), "utf-8")
    },
}
/* 

registro logMiddleware
autorizacion authMiddleware -> tipo de usuario
db middleware
*/

