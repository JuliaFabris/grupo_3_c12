let router = require('express').Router(),
upload = require('../middlewares/uploadProductFile');

/* controlador */
let controller = require('../controllers/admincontroller')


/* rutas */
// inicio de pagina de admin 
router.get('/', controller.inicio)

// get - lista de productos
router.get('/products', controller.productos)

// get - formulario de edicion de producto
router.get('/products/edit/:id', controller.editar)
router.put('/products/edit/:id', upload.single('file'), controller.actualizar)
// get - formulario de nuevo producto
router.get('/products/new', controller.crear)
router.post('/products/new',upload.single('file'), controller.agregar)

//
router.delete('/products/:id/dlt', controller.eliminar)




module.exports = router