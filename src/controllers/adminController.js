let {tablePeliculas, generos, tableGeneros} = require('../database')


module.exports = {
    "inicio": (req, res) => {
        res.render('./admin/dashboard')
    },

    "productos": (req, res) => {
        res.render('./admin/products', {peliculas: tablePeliculas.all})
    },

    /* formulario de edicion de producto*/
    "editar": (req, res) => {
        let id = +req.params.id
        res.render('./admin/editProduct', {producto: tablePeliculas.get(id), generos: tableGeneros.all})
    },

    "actualizar": (req, res) => {
        let id = req.params.id;
       /*  let modifies = {
            id: +req.body.id,
            name: req.body.name.trim(),
            age: +req.body.age,
            price: +req.body.price,
            category: req.body.category,
            description: req.body.description.trim(),
        } */

        tablePeliculas.upd(id, res.body)
        // res.redirect('admin/products')
        res.send("actualizado   ")
    },

    /* formulario de nuevo producto */
    "crear": (req, res) => {
        res.render('./admin/addProduct', { generos: tableGeneros.all})
    },

    "agregar": (req, res) => {
        let image = req.file? req.file.filename : "" 
        let pelicula = {
            ...req.body,
            image     
        }
        //res.send(producto)
        tablePeliculas.add(pelicula)

        res.redirect('/admin/products')
    },

    "eliminar": (req, res) => {
        let id = +req.params.id
        let product = tablePeliculas.get(id)
        if(product != undefined){
            tablePeliculas.dlt(product)
            res.redirect('/admin/products')
        }else res.send("no borre nada toga")
    },

    "testAddGener": (req, res) => {
        
    }
}