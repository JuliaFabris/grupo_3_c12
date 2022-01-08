let { tablePeliculas, generos, aniosEnLista} = require('../database/')

module.exports = {
    "peliculasPorGenero": (req, res) => {
        let genero = req.params.genero
        let lista = getPeliculas.filter(pelicula => pelicula.genero.includes(genero))
        res.render('user/home', {
            peliculas: lista,
            generos: getGeneros,
            anios: aniosEnLista})
    },

    // detalle de pelicula

    "detail": (req, res) => {
        let genero = req.params.genero
        let lista = getPeliculas.filter(pelicula => pelicula.genero.includes(genero))
        let id = +req.params.id

        let product = products.find(product => product.id === id)
        let relatedProducts = products.filter(relatedProduct => relatedProduct.category === product.category)
        res.render('product-detail', {
            product: tablePeliculas.get(id),

            sliderTitle: "Productos relacionados",
            sliderProducts: relatedProducts
        })
    }
}
