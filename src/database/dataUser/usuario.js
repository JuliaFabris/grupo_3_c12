let fs = require('fs')

let dataUser = JSON.parse(fs.readFileSync('./usuarios.json', 'utf-8'))
let backUser = JSON.parse(fs.readFileSync('./backUsuario.json', 'utf-8'))

