const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
let cookieParser = require('cookie-parser');
let cookieSession = require('./middlewares/cookieSession');

const PORT = 3000;

/* rutas */
let homeRouter = require('./routes/home')
let productsRouter = require('./routes/products')
let adminRouter = require('./routes/admin')
let userController = require('./routes/user')
let faqRouter = require('./routes/faq')

//este metodo se va a borrar
 let pathAbsolute = (rutaRelativa) => path.resolve(__dirname, rutaRelativa)


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

/* session */
app.use(session({
    secret: 'GrupoTresTriMovie',
    resave: false,
    saveUninitialized: true,
}))

/* configuracion de cookies */
app.use(cookieParser())
app.use(cookieSession)

/*  */
app.use('/', homeRouter);

/* products */
app.use('/products', productsRouter)

/* admin profile */
app.use('/admin', adminRouter)

/* user */
app.use('/user', userController)

/* faq */
app.use('/faq', faqRouter)


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

