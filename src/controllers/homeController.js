let {
    tablePeliculas,
    tableFavorites,
    tableGeneros,
    aniosEnLista
} = require('../database'), {
    getListAllUniqueAtributes
} = require('../middlewares/ourLib')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: tablePeliculas.all,
            generos: tableGeneros.all,
            anios: getListAllUniqueAtributes(tablePeliculas.all, 'age'),
            favorites: tableFavorites.getFavoritesByUser(1)
        })
    },

    FilterByGender: (req, res) => {

        let list = [],
            id = +req.params.id;
        let gender = tableGeneros.get(id);

        tablePeliculas.all.forEach(peli => {
            let categorias = peli.category 

            console.log(gender)
            console.log(peli.category)
            console.log(categorias.includes(gender.name))
            if(categorias.includes(gender.name)) list.push(peli);
        })
        console.log(list.length)

        res.send(list)
    }
}