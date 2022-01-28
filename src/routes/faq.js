const router = require('express').Router(),
    controller = require('../controllers/faqController');

router.get('/terminos-y-condiciones', controller.faq);
router.get('/sobre-nosotros', controller.sobreNosotros);
router.get('/privacidad', controller.privacidad);
router.get('/lostPass', controller.perdiMiUsuario);
router.get('/contacto', controller.contacto);

module.exports = router;