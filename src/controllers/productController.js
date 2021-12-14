let peliculas=require('../data/products/peliculas.json')


let controller = {
    product: (req, res) => {
        
        res.render("product-detail",{
            titulo:pelicula.nombre}
        )
   

}

module.exports = controller


    