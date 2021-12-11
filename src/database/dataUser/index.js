let fs = require('fs')

let dataUser = JSON.parse(fs.readFileSync('./src/database/dataUser/usuarios.json', 'utf-8'))
let backUser = JSON.parse(fs.readFileSync('./src/database/dataUser/backUsuario.json', 'utf-8'))

let lastIndex = (planilla) => {
    let maxAux = planilla[planilla.length - 1].id
    let maxms = planilla.filter(registro => registro.id >= maxAux)
    if (maxms.lenght > 1) {
        return lastIndex(maxms + 1)
    }
    return maxms[0].id
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
            let id = lastIndex(dataUser)+1
            usuario.id = id
            backUser.push({"user": user, "pass": pass, "id": id})
            dataUser.push(usuario)
            fs.writeFileSync('./src/database/dataUser/usuarios.json', JSON.stringify(dataUser), 'utf-8')
            fs.writeFileSync('./src/database/dataUser/backUsuario.json', JSON.stringify(backUser), 'utf-8')
        }
    }
}