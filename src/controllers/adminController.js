let {peliculas, generos} = require('../database')


module.exports = {
    "inicio": (req, res) => {
        res.render('./admin/dashboard')
    },

    "productos": (req, res) => {
        res.render('./admin/products', {peliculas: peliculas.data})
    },

    /* formulario de edicion de producto*/
    "editar": (req, res) => {
        let id = +req.params.id
        res.render('./admin/editProduct', {producto: peliculas.get(id)})
    },

    "actualizar": (req, res) => {

    },

    /* formulario de nuevo producto */
    "crear": (req, res) => {
        res.render('./admin/addProduct')
    },

    "agregar": (req, res) => {
        let producto = req.body
        //res.send(producto)
        peliculas.add(producto)

        res.redirect('/admin/products')
    },

    "eliminar": (req, res) => {
        let id = +req.params.id
        let product = peliculas.get(id)
        peliculas.dlt(product)
        res.redirect('/admin/products')
    }
}