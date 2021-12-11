let router = require('express').Router()

let controller = require('../controllers/userController')

/* GET - formulario de inicio de sesion */
router.get('/login', controller.loginPage)
router.post('/login', controller.login)
/* POST */
router.get('/register', controller.registerPage)



module.exports = router