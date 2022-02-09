let {
    getMovies,
    getGenres,
} = require('../database'), {
    getListAllUniqueAtributes
} = require('../middlewares/ourLib')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: getMovies,
            generos: getGenres,
            anios: getListAllUniqueAtributes(getMovies, 'age'),
            session: req.session.user
        })
    },

    FilterByGender: (req, res) => {

        let genero = req.params.id;
        let genre = getGenres.find(genre => genre.id == genero);
        let lista = getMovies.filter(pelicula => pelicula.category.includes(genre.name));
        res.send(lista)
    }
}