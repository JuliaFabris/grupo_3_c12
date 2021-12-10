let {peliculas, generos, aniosEnLista} = require('../database')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: peliculas.data,
            generos: generos.data,
            anios: aniosEnLista    
        })
    }
}