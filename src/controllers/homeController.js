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
        console.log(genero)
        console.log(getMovies.length)
        let genre = getGenres.find(genre => genre.id == genero);
        console.log(genre[0])
        let lista = getMovies.filter(pelicula => pelicula.category.includes(genre.name));
        console.log(lista.length)
        res.send(lista)
    }
}