let router = require('express').Router()

let controller = require('../controllers/userController')

/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
/* POST */
router.get('/register', controller.registerPage)



module.exports = router