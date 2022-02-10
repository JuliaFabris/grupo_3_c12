

 let {
    getMovies,
    getGenres
} = require('../database');
const { getListAllUniqueAtributes } = require('../middlewares/ourLib');

module.exports = {
    "peliculasPorGenero": (req, res) => {
        let genero = req.params.genero
        let lista = getPeliculas.filter(pelicula => pelicula.genero.includes(genero));
        res.render('user/home', {
            peliculas: lista,
            generos: getGeneros,
            anios: aniosEnLista
        })
        // res.send(lista);
    },

    // detalle de pelicula

    "detail": (req, res) => {
        let id = +req.params.id;
        let movie = getMovies.find(pelicula => pelicula.id == id);
        res.render('product-detail', {
            movie,
            session: req. session.user,
            genresMovie: getGenres,
            anios: getListAllUniqueAtributes(getMovies, 'age'),
            peliculas: getMovies
        });
    }
} 

