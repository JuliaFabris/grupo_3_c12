let router = require('express').Router()
let controller = require('../controllers/userController')
let checkLogin = require('../middlewares/userAdminCheck')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')
let userAdminCheck= require ('../middlewares/userAdminCheck')

/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.get('/register', controller.registerPage)

 /*POST */
router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login', loginValidator,userAdminCheck,controller.login)

/* GET */
router.get('/carrito', controller.carrito)


module.exports = router