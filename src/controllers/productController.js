let peliculas=require('../data/peliculas.json')


let controller = {
    product: (req, res) => {
        res.render('product-detail',{
            Titulo:"Detalle"})
    }
}

module.exports = controller


    