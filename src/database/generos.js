let fs = require('fs')

let data = JSON.parse(fs.readFileSync('./src/database/generos.json', 'utf-8'))


module.exports = {
    "data": data
}