let router = require('express').Router()
let controller = require('../controllers/homeController')

/* Get - pagina de inicio */
router.get('/product-detail', controller.inicio)
router.get('/product-detail/:id', controller.inicio)


module.exports = router