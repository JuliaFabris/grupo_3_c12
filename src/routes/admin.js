let router = require('express').Router(),
upload = require('../middlewares/uploadProductFile');
let userAdminCheck = require('../middlewares/userAdminCheck')
/* controlador */
let controller = require('../controllers/peliculasController')
let uploadProductFile = require('../middlewares/uploadProductFile')
let productFormValidator = require('../validations/productFormValidator');


/* rutas */
// inicio de pagina de admin 
router.get('/', controller.inicio)

// get - lista de productos
/*Router.get('/products', controller.productos)*/

// get - formulario de edicion de producto
router.get('/products/edit/:id', controller.editar)
router.put('/products/edit/:id', upload.single('image'), controller.actualizar)
// get - formulario de nuevo producto

router.get('/products/new', controller.crear)
router.post('/products/new',upload.single('image'), productFormValidator, controller.agregar)

// get - formulario de listar y detalle
router.get('/products/listar', controller.listar)
router.get('/products/detalle/:id', controller.detalle)


/*Delete product*/
router.delete('/products/:id/dlt', controller.eliminar)





module.exports = router