const express = require('express');
const path = require('path');
const app = express(); //Para utilizar express
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cookieSession = require('./middlewares/cookieSession')


const PORT = 3000; //Este es elpuerto que usamos para levantar el servidor


/* rutas */
let homeRouter = require('./routes/home')
let productsRouter = require('./routes/products')
let adminRouter = require('./routes/admin')
let userRouter = require('./routes/user')
let faqRouter = require('./routes/faq')


/*Middlewares*/
app.use(session({
    secret: "Trimovie",
    resave: false,
    saveUninitialized: true
}))
app.use(methodOverride('_method')) /* Nos permite recibir información por los metodos PUT Y DELETE */
app.use(cookieParser())
app.use(cookieSession)

//este metodo se va a borrar
 let pathAbsolute = (rutaRelativa) => path.resolve(__dirname, rutaRelativa)
/*
const publicPath = pathAbsolute("./public"); 
app.use(express.static(publicPath)) */

/* configuracion del motor de vistas */
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

/* configuracion de ruta publica */
app.use(express.static(path.join(__dirname, '../public')));

/* configuracion de metodos http */
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


/* configuracion de lectura por js de elementos del require */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*  */
app.use('/', homeRouter);

/* products */
app.use('/products', productsRouter)

/* admin profile */
app.use('/admin', adminRouter)

/* user */
app.use('/user', userRouter)

/* faq */
app.use('/faq', faqRouter)

//app.use('/product-detail',productController)
//app.use('/login',login)
//app.use('/carrito',carritoController)




// app.get('/product-detail', (req, res) =>{
    //res.sendFile(pathAbsolute('./views/product-detail'))
//});

/* app.get('/carrito', (req, res) =>{
    res.sendFile(pathAbsolute('./views/carrito.html'))
}); */

app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

