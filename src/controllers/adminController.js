/*let {tablePeliculas, generos, tableGeneros} = require('../database')*/
const fs = require("fs")
/*Obtenemos dentro de nuestro controlador nuestra base de datos y el método para actualizar información de la base de datos*/
const {products, writePeliculasJson, generos} = require("../database/index");

let controller = {

inicio : (req, res) => {

},
productos: (req, res) => {

},
editar: (req, res) => {
let prdouct = products.find(product => product.id === +req.params.id);

console.log(product);
res.render("admin/editProduct", {
    generos,
    producto: producto
})
},
actualizar: (req, res) => {
const {name, category, age, price, description} = req.body

products.forEach(product => {
    if(product.id === +req.params.id,
        product.name = name.trim(),
        prduct.price = price,
        product.description = description.trim(),
        if(req.file){
         if(fs.existsSync("./public/desing/image/products/", product.image)){
             fs.unlink(`./public/desing/images/products/${product.image}`)
         /*Si llegara una nueva imagen buscaremos la imagen almacenada anteriormente y si extiste la eliminamos*/
         }
        } /*consultamos si la imagen que está almcenada en nuestra base de datos existe en 
        product.age= age,
        product.category= category
})





},
crear: (req, res) => {
 res.render("admin/addProducts", {
     generos
 })
 generos
},
eliminar: (req, res) => {

},
agregar: (req, res) => {
 const {name, category, age, price, description} = req.body

 let lastId = 1;

 products.forEach(product => {
if(product.id > lasId) {
    lasId = products.id
}
 });

 let newProducts = {
     id: lasId + 1,
     name: name.trim(),
     price: price,
     description: description.trim(),
     image: req.file ? req.file.filename: "default-image.png",
     age: age,
     category: category
 }
 products.push(newProducts);
 writePeliculasJson(products);

 res.redirect("/admin/products")
},

}

module.exports = controller;













/*module.exports = {
    "inicio": (req, res) => {
        res.render('./admin/dashboard')
    },

    "productos": (req, res) => {
        res.render('./admin/products', {peliculas: tablePeliculas.all})
    },

     formulario de edicion de producto
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
        } 

        tablePeliculas.upd(id, res.body)
        // res.redirect('admin/products')
        res.send("actualizado   ")
    },

    /* formulario de nuevo producto 
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
} */