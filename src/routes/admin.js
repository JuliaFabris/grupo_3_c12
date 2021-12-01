let router = require('express').Router()

/* controlador */
let controller = require('../controllers/admincontroller')


/* rutas */
// inicio de pagina de admin 
router.get('/', controller.inicio)

// get - lista de productos
router.get('/products', controller.productos)

// get - formulario de edicion de producto
router.get('/products/edit/:id', controller.modificar)

// get - formulario de nuevo producto
router.get('/products/new', controller.formAgregar)
// validacion de nuevo producto
router.post('/products/new', controller.agregar)



module.exports = router