let {tablePeliculas, tableGeneros, aniosEnLista} = require('../database'),
{getListAllUniqueAtributes} = require('../middlewares/ourLib')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: tablePeliculas.data,
            generos: tableGeneros.all,
            anios: getListAllUniqueAtributes(tablePeliculas.data, 'age')    
        })
    }
}