let express = require ('express');
let router = express.router();
let peliculasController = require('../controllers/peliculasController');
/*crear*/

router.get("/crear",peliculasController.crear);
router.post("/crear",peliculasController.guardar);

/*Lectura*/

router.get("/", peliculasController.listar);

/*Detalle*/

router.get("/:id", peliculasController.detalle);

/*Actualizar*/

router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

/*Borrar*/
router.post("/borrar/:id", peliculasController.borrar);

module.exports = router;