const db = require('../database/models');

module.exports = {
    inicio: (req, res) => {

        let movies = db.Movie.findAll()
        let genres = db.Genre.findAll()
        let years = db.Movie.findAll({
            attributes: ['year'],
            group: ["year"],
            having: "",
        })
        Promise.all([movies, genres, years])

            .then(([movies, genres, years]) => {
                return  res.render('home', {
                        titulo: "Inicio",
                        peliculas: movies,
                        generos: genres,
                        anios: years.map(element => element.year),
                        session: req.session.user
                    })
            })
            .catch(error => console.log(error))



    },

    FilterByGender: (req, res) => {

        let genero = req.params.id;
        let genre = getGenres.find(genre => genre.id == genero);
        let lista = getMovies.filter(pelicula => pelicula.category.includes(genre.name));
        res.send(lista)
    }
}