let {tablePeliculas, generos} = require('../database')


module.exports = {
    "inicio": (req, res) => {
        res.render('./admin/dashboard')
    },

    "productos": (req, res) => {
        res.render('./admin/products', {peliculas: tablePeliculas.data})
    },

    /* formulario de edicion de producto*/
    "editar": (req, res) => {
        let id = +req.params.id
        res.render('./admin/editProduct', {producto: tablePeliculas.get(id)})
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
        tablePeliculas.add(producto)

        res.redirect('/admin/products')
    },

    "eliminar": (req, res) => {
        let id = +req.params.id
        let product = tablePeliculas.get(id)
        tablePeliculas.dlt(product)
        res.redirect('/admin')
    }
}