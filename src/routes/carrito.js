let express = require('express')
let router = express.Router()
let controller = require('../controllers/carrito')

/* GET - Home page */
router.get('/carrito', controller.carritoPage)



module.exports = router