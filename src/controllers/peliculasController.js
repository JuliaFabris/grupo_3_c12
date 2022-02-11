let db = require('../database/models');

let peliculasController = {
crear: function (req,res) {
 db.genre.findAll()
 .then(function(genres) {
     return res.render('creacionPeliculas', {genres:genres});
     
 })   
},
guardar: function (req,res) {
    db.movie.create({
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
    });

    res.redirect("/peliculas");
},
listar: function (req,res) {
    db.movie.findAll()
    .then (function(movies) {})
    res.render("listadoPeliculas", {movies:movies})
},
detalle: function(req,res) {
    db.Movie.findByPk(req.params.id)
    .then(function(movie){
        res.render("detallePelicula", {movie:movie});
    })
},
editar: function(req,res) {
    let movieRequest = db.movie.findByPK(req.params.id);
    let genresRequest = db.movie.findAll();
    promise.all([movieRequest,genresRequest])
    .then(function([movie, genres]){
        res.render("editarPelicula", {movie:movie, genres:genres});
    })    
},
actualizar: function(req,res) {
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
        id:req.params.id
     }
    });
    res.redirect("/peliculas/" + req.params.id)
},
borrar: function(req,res) {
    db.movie.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect("/peliculas");
},
peliculasPorGenero: (req, res) => {

}
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

