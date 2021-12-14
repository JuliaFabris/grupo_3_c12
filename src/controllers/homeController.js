let {tablePeliculas, generos, aniosEnLista} = require('../database')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: tablePeliculas.data,
            generos: generos.data,
            anios: aniosEnLista    
        })
    }
}