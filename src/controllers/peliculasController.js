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
            .then(function (movies) { res.render("/admin/dashboard", { movies: movies })})
            .catch(error => console.log({error}))
       
    },
    detalle: function (req, res) {
        res.send(req.session)
        db.Movie.findByPk(req.params.id, {include:["genres"]
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
        let movieRequest = db.movie.findByPK(req.params.id);
        let genresRequest = db.movie.findAll();
        promise.all([movieRequest, genresRequest])
            .then(function ([movie, genres]) {
                res.render("/admin/dashboard", { movie: movie, genres: genres });
            })
    },
    actualizar: function (req, res) {
        db.movie.update({
            title: req.body.title,
            director: req.body.director,
            rating: req.body.rating,
            duration: req.body.duration,
            year: req.body.year,
            director: req.body.director,
            trailer: req.body.trailer,
            sinopsis: req.body.sinopsis,
            image: req.body.image,
            genres: req.body.genres
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/admin" + req.params.id)
    },
    delete: function (req, res) {
        db.movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/admin");
    },
    inicio: (req, res) => {
        db.Peli.findAll()
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

