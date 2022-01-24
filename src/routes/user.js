let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userCheckLogin')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')


/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.get('/register', controller.register)

 POST 
router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login',checkLogin, controller.login)

/* POST */
router.get('/register', controller.registerPage);
router.post('/register', controller.register);
/* GET */
router.get('/carrito', controller.carrito)




module.exports = router