let peliculas=require('../data/products/peliculas.json')


let controller = {
    product: (req, res) => {
        
        res.render("product-detail",{
            titulo: req.body.name
            

        })
   

}
}
module.exports = controller


    