let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userCheckLogin')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')


/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.get('/register', controller.registerPage)
router.get('/carrito', controller.carrito)
 /*POST */
router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login', loginValidator, controller.login)

/* POST 
router.get('/register', controller.registerPage);
router.post('/register', controller.register);*/



module.exports = router