let router = require('express').Router()
let controller = require('../controllers/userController')
let uploadFile = require ('../middlewares/uploadAvatar')
let registerValidator = require('../validations/registerValidator')
let loginValidator = require ('../validations/loginValidator')
let userAdminCheck= require ('../middlewares/userAdminCheck')
let usercheckLogin = require('../middlewares/usercheckLogin');

router.get('/login', controller.loginPage)
router.get('/register', controller.registerPage)
router.get('/carrousel', controller.registerPage)
router.get('/carrito', controller.carrito)

router.post('/register', uploadFile.single('avatarimage'),registerValidator, controller.processRegister)
router.post('/login', loginValidator ,controller.login)

module.exports = router