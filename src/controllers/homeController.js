let {tablePeliculas, tableGeneros, aniosEnLista} = require('../database'),
{getListAllUniqueAtributes} = require('../middlewares/ourLib')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: tablePeliculas.all,
            generos: tableGeneros.all,
            anios: getListAllUniqueAtributes(tablePeliculas.all, 'age')    
        })
    }
}