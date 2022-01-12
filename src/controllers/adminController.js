const fs = require("fs")
/*Obtenemos dentro de nuestro controlador nuestra base de datos y el método para actualizar información de la base de datos*/
const { products, writePeliculasJson, generos } = require("../database/index");  


let controller = {   
     inicio: (req, res) => {
        res.render('admin/dashboard', {
            session: req.session
        })
    },
    productos: (req, res) => {
        res.render('admin/Products', {
            peliculas: products,
            session: req.session
        })
    },
    editar: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);        console.log(product);
        res.render("admin/editProduct", {
            generos,
            producto: product,
       })
    },
    actualizar: (req, res) => {
        const { name, category, age, price, description, reparto, direction, duration } = req.body;
                products.forEach(product => {
            if (product.id === +req.params.id) {
                product.name = name.trim(),
                    prduct.price = price,
                    product.description = description.trim(),
                    product.direction = direction,
                    product.duration = duration,
                    product.reparto = reparto
                if (req.file) {
                    if (fs.existsSync("./public/desing/image/products/", product.image)) {
                        fs.unlink(`./public/desing/images/products/${product.image}`)
                        /*Si llegara una nueva imagen buscaremos la imagen almacenada anteriormente y si extiste la eliminamos*/
                    }
                }
            }     
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
        products.forEach((product, index) => {
            if (product.id === productId) {
                if (fs.existsSync("./public/images/productos/", product.image)) {
                    fs.unlinkSync(`./public/images/productos/${product.image}`)
                } else {
                    console.log('No encontré el archivo')
                }                
                products.splice(index, 1)               
            }
        })       
        writePeliculasJson(products)
        res.redirect('admin/products')
    },  
      agregar: (req, res) => {
        const { name, category, age, price, description, reparto, duration, direction } = req.body;
            let lastId = 1;        products.forEach(product => {
            if (product.id > lasId) {
                lasId = products.id
            }
        });        
        let newProducts = {
            id: lasId + 1,
            name: name.trim(),
            price: price,
            description: description.trim(),
            image: req.file ? req.file.filename : "default-image.png",
            age: age,
            category: category,
            reparto: reparto,
            direction: direction,
            duration: duration
        }
        products.push(newProducts);
        writePeliculasJson(products);
        res.redirect("/admin/products")    
    }
};

module.exports = controller;