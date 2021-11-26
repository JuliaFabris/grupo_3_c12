let { getPeliculas, getGeneros, aniosEnLista} = require('../data/database')

module.exports = {
    peliculasPorGenero: (req, res) => {
        let genero = req.params.genero
        let lista = getPeliculas.filter(pelicula => pelicula.genero.includes(genero))
        res.render('user/home', {
            peliculas: lista,
            generos: getGeneros,
            anios: aniosEnLista})
    }
}