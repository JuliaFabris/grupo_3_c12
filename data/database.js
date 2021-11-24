let fs = require("fs")

module.exports = {
    getPeliculas: JSON.parse(fs.readFileSync('./data/peliculas.json'))
}