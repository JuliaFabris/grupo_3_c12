let {
    getMovies,
    getGenres,
    getFavorites
} = require('../database'), {
    getListAllUniqueAtributes
} = require('../middlewares/ourLib')

module.exports = {
    inicio: (req, res) => {
        res.render('home', {
            titulo: "Inicio",
            peliculas: getMovies,
            generos: getGenres,
            anios: getListAllUniqueAtributes(getMovies, 'age'),
            favorites: getFavorites.getFavoritesByUser(1)
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