const router = require('express').Router(),
    controller = require('../controllers/faqController');

router.get('/terminos-y-condiciones', controller.faq);


module.exports = router;