const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
let cookieParser = require('cookie-parser');
let cookieSession = require('./middlewares/cookieSession');

const PORT = 3000;

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

/* configuracion de cookies */
app.use(cookieParser())
/* session */
app.use(session({
    secret: 'GrupoTresTriMovie',
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieSession)


/* rutas */
let homeRouter = require('./routes/home');
let productsRouter = require('./routes/products');
let adminRouter = require('./routes/admin');
let userRouter = require('./routes/user');
let faqRouter = require('./routes/faq');
/*const userController = require('./controllers/userController');*/

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
// app.use(userLogs); //Middleware que hace txt para conocer las url donde logea el user
/* comente el metodo userLogs para no sobrecargar las adiciones de lineas en los commits*/

/* ERROR 404 */
app.use((req, res, next) => {
    res.status(404).render('404')
})


app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

