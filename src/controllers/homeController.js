let {getPeliculas, getGeneros, aniosEnLista} = require('../data/database')

module.exports = {
    inicio: (req, res) => {
        res.render('user/home', {
            titulo: "Inicio",
            peliculas: getPeliculas,
            generos: getGeneros,
            anios: aniosEnLista    
        })
    }
}