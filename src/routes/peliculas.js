let express = require ('express');
let router = express.Router();
let peliculasController = require('../controllers/peliculasController');
/*crear*/

router.get("/crear",peliculasController.crear);
router.post("/agregar",peliculasController.agregar);

/*Lectura*/

router.get("/", peliculasController.inicio);

/*Detalle*/

router.get("/:id", peliculasController.detalle);

/*Actualizar*/

router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

/*Borrar*/
router.post("/delete/:id", peliculasController.delete);

module.exports = router;