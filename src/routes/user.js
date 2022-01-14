let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userCheckLogin')
let loginValidator = require('../validators/loginValidator')

/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.post('/login',loginValidator,checkLogin, controller.login)



/* POST */
router.get('/register', controller.registerPage);
router.post('/register', controller.register);
/* GET */
router.get('/carrito', controller.carrito)




module.exports = router