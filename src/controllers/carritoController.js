let controller = {
    carritoPage: (req, res) => {
        res.render('carrito',{
            Titulo:"Carrito de compras"})
    }
}

module.exports = controller