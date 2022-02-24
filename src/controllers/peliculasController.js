let {
    getMovies,
    getGenres,
} = require('../database'), {
    getListAllUniqueAtributes
} = require('../middlewares/ourLib')

// momentaneo

let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genre.findAll()
            .then(function (genres) {
                return res.render('/admin/addProduct', { genres: genres });

            })
    },
    agregar: function (req, res) {
        db.Movie.create({
            title: req.body.title,
            director: req.body.director,
            length: req.body.length,
            year: req.body.year,
            trailer: req.body.trailer,
            sinopsis: req.body.sinopsis,
            image: req.body.image,
            genres: req.body.genres
        });

        res.redirect("/admin");
    },
    listar: function (req, res) {
        db.Movie.findAll()
            .then(function (movies) { res.render("/admin/dashboard", { movies: movies }) })
            .catch(error => console.log({ error }))

    },
    detalle: function (req, res) {
        res.send(req.session)
        db.Movie.findByPk(req.params.id, {
            include: ["genres"]
        })
            .then(function (movie) {
                res.render("detallePelicula", { movie: movie });
            }), getMovies.forEach(element => {
                if (element.id == req.params.id) movie = element;
            });
        res.render("product-detail", {
            movie,
            session: req.session.user,
            genresMovie: Genres,
        })
    },
    editar: function (req, res) {
        let movie = db.Movie.findByPk(req.params.id);
        let genres = db.Genre.findAll();
        let directors = db.Director.findAll();
        let actors = db.Actor.findAll()
        Promise.all([movie, genres, directors, actors])
            .then(function ([movie, genres, directors ,actors]) {
                res.render("admin/editarPelicula", { 
                    movie, 
                    genres,
                    directors,
                    actors
                });
            })
    },
    actualizar: function (req, res) {

        let {title, directorId, length, year, trailer, sinopsis,genres} = req.body

        db.Movie.update({
            title: title.trim(),
            directorId: +directorId,
            length: +length,
            year: +year,
            trailer: trailer.trim(),
            sinopsis: sinopsis.trim(),
        }, {
            where: {
                id: req.params.id
            }
        }).then( async () => {

            if(typeof genres === "string"){
                genres = genres.split()
            }

            await db.Movie_has_Genre.destroy({
                where : {
                    movieId : req.params.id
                }
            })

            genres.forEach( async genre => {
                await db.Movie_has_Genre.create({
                    movieId : req.params.id,
                    genreId : +genre
                })
            });


            return res.redirect("/admin")
        }).catch(error => console.log(error))
    },
    eliminar: function (req, res) {
        db.movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/admin");
    },
    inicio: (req, res) => {
        db.Movie.findAll()
            .then(function (movies) {
                res.render('admin/dashboard', {
                    session: req.session.user,
                    peliculas: movies,
                    user: req.session.user
                })
            })
            .catch(error => console.log(error))
    },
    /*peliculasPorGenero: (req, res) => {
    
    }*/
}
module.exports = peliculasController;
















/*let {
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
}*/

