const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

/* rutas */
let homeRouter = require('./routes/home')

//este metodo se va a borrar
 let pathAbsolute = (rutaRelativa) => path.resolve(__dirname, rutaRelativa)
/*
const publicPath = pathAbsolute("./public"); 
app.use(express.static(publicPath)) */

/* configuracion del motor de vistas */
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.use(express.static(path.join(__dirname, '../public')));


/* configuracion de lectura por js de elementos del require */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*  */
app.use('/', homeRouter);

app.get('/login', (req, res) =>{
    res.render('login')
});

app.get('/register', (req, res) =>{
    res.sendFile(pathAbsolute('./views/register.html'))
});

app.get('/product-detail', (req, res) =>{
    res.sendFile(pathAbsolute('./views/product-detail.html'))
});

app.get('/carrito', (req, res) =>{
    res.sendFile(pathAbsolute('./views/carrito.html'))
});

app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));
