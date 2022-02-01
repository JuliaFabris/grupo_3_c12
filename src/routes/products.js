let router = require('express').Router()
let controller = require('../controllers/peliculasController')

/* Get - peliculas por genero */
router.get('/:genero', controller.peliculasPorGenero)

router.get('/:categories', controller.categories)

router.get('/detail/:id', controller.detail)

module.exports = router