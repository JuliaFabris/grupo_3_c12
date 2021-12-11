let peliculas=require('../data/peliculas.json')


let controller = {
    product: (req, res) => {

        let productDetailId = +req.params.id;

        let product = product.find(product => product.id === productDetailId)
        let relatedProducts = products.filter(relatedProduct => relatedProduct.genero === product.genero)|| (relatedProduct.genero==pelicula.anio);
       
        res.render('product-detail',{
            Titulo:"Detalle de",
            product,
            sliderTitle: "Productos relacionados",
            sliderProducts: relatedProducts,


        })
    
    }
}

module.exports = controller


    