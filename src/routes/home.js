let router = require('express').Router()
let controller = require('../controllers/homeController')

/* Get - pagina de inicio */
router.get('/', controller.inicio);

router.get('/peliculas/genero/:id', controller.FilterByGender);


module.exports = router