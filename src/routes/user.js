let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userAdminCheck')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')
let userAdminCheck= require ('../middlewares/userAdminCheck')
let usercheckLogin = require('../middlewares/usercheckLogin');
/* GET - formulario de inicio de sesion */
<<<<<<< HEAD
router.get('/login', controller.loginPage)
router.get('/register', controller.registerPage)
router.get('/carrito', controller.carrito)
=======
router.get('/login', usercheckLogin, controller.loginPage)
router.get('/register', usercheckLogin, controller.registerPage)

>>>>>>> bfe7ebea60b66e8f284719f6d5b525f5124c798e
 /*POST */
router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login', loginValidator ,controller.login)

/* POST 
router.get('/register', controller.registerPage);
router.post('/register', controller.register);*/
<<<<<<< HEAD

=======
/* GET */

router.get('/', controller.logout) 
router.get('/carrito', controller.carrito)
>>>>>>> bfe7ebea60b66e8f284719f6d5b525f5124c798e

router.get('/profile', controller.profile)


module.exports = router