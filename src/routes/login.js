let express = require('express')
let router = express.Router()
let controller = require('../controllers/login')

/* GET - Home page */
router.get('/login', controller.LoginPage)



module.exports = router