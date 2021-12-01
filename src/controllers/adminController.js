let {peliculas, generos} = require('../database')


module.exports = {
    "inicio": (req, res) => {
        res.render('./admin/dashboard')
    },

    "productos": (req, res) => {
        res.render('./admin/products', {peliculas: peliculas.data})
    },

    /* formulario de edicion de producto*/
    "modificar": (req, res) => {
        let id = +req.params.id
        res.render('./admin/editProduct', {producto: peliculas.get(id)})
    },

    /* formulario de nuevo producto */
    "formAgregar": (req, res) => {
        res.render('./admin/addProduct')
    },

    "agregar": (req, res) => {
        let producto = req.body
        //res.send(producto)
        peliculas.add(producto)

        res.redirect('/admin/products')
    }
}