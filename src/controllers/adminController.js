/*let {tablePeliculas, generos, tableGeneros} = require('../database')*/
const fs = require("fs")
/*Obtenemos dentro de nuestro controlador nuestra base de datos y el método para actualizar información de la base de datos*/
const {products, writePeliculasJson, generos} = require("../database/index");

let controller = {

inicio : (req, res) => {
    res.render('admin/dashboard', {
        session: req.session
    })
},
productos: (req, res) => {
    res.render('admin/Products', {
        products,
        session: req.session
    })
},
editar: (req, res) => {
let product = products.find(product => product.id === +req.params.id);

console.log(product);
res.render("admin/editProduct", {
    generos,
    producto: producto,
    id,
    direction,
    image,
    reparto, 
    duration,


})
},
actualizar: (req, res) => {
const {name, category, age, price, description, reparto, direction, duration} = req.body

products.forEach(product => {
    if(product.id === +req.params.id){
        product.name = name.trim(),
        product.price = price,
        product.description = description.trim(),
        product.direction=direction,
        product.duration=duration,
        product.reparto= reparto
         if (req.file){ 
             if(fs.existsSync('/public/desing/image/products/', product.image)){
             fs.unlinkSync(`./public/desing/images/products/${product.image}`)
            } 
        } }
         /*Si llegara una nueva imagen buscaremos la imagen almacenada anteriormente y si extiste la eliminamos*/
         
        /*consultamos si la imagen que está almcenada en nuestra base de datos existe en 
        product.age= age,
        product.category= category*/
})

},
crear: (req, res) => {
 res.render("admin/addProducts", {
     generos
 })
 generos
},
eliminar: (req, res) => {
    let productId = +req.params.id;

		products.forEach(product => {
			if(product.id === productId){
				if(fs.existsSync("./public/images/productos/", product.image)){
					fs.unlinkSync(`./public/images/productos/${product.image}`)
				}else{
					console.log('No encontré el archivo')
				}

				let productToDestroyIndex = products.indexOf(product) // si lo encuentra devuelve el indice si no -1
				if(productToDestroyIndex !== -1) {
					product.splice(productToDestroyIndex, 1)
				}else{  // primer parámetro es el indice del elemento a borrar, el segundo, la cantidad a eliminar 
					console.log('No encontré el producto')
				}
			}
		})

		writePeliculasJSON(product)
		res.redirect('admin/Products')
    }
},


agregar: (req, res) => {
 let {name, category, age, price, description, reparto, duration, direction} = req.body

 let lastId = 1;

 products.forEach(product => {
if(product.id > lastId) {
    lastId = products.id
    }});


 let newProducts = {
     id: lasId + 1,
     name: name.trim(),
     price: price,
     description: description.trim(),
     image: req.file ? [req.file.filename] : ["default-image.png"],
     age: age,
     category: category,
     reparto: reparto,
     direction: direction,
     duration: duration
 }
 products.push(newProducts);
 writePeliculasJson(products);
 res.redirect("/admin/products")

};




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