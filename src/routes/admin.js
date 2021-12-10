let router = require('express').Router()

/* controlador */
let controller = require('../controllers/admincontroller')


/* rutas */
// inicio de pagina de admin 
router.get('/', controller.inicio)

// get - lista de productos
router.get('/products', controller.productos)

// get - formulario de edicion de producto
router.get('/products/edit/:id', controller.editar)
router.put('/products/edit/:id', controller.actualizar)
// get - formulario de nuevo producto
router.get('/products/new', controller.crear)
router.post('/products/new', controller.agregar)

//
router.delete('/products/:id/dlt', controller.eliminar)




module.exports = router