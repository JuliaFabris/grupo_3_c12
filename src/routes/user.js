let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userAdminCheck')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')
let userAdminCheck= require ('../middlewares/userAdminCheck')
/*let userCheck = require('../middlewares/userCheck');*/
/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.get('/register', controller.registerPage)

 /*POST */
router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login', loginValidator,userAdminCheck,controller.login)

/* POST 
router.get('/register', controller.registerPage);
router.post('/register', controller.register);*/
/* GET */

router.get('/', controller.logout) 
router.get('/carrito', controller.carrito)

router.get('/profile', controller.profile)


module.exports = router