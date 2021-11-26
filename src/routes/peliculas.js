let router = require('express').Router()
let controller = require('../controllers/peliculasController')

/* Get - peliculas por genero */
router.get('/:genero', controller.peliculasPorGenero)


module.exports = router