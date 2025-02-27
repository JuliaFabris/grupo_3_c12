require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); 
const session = require('express-session');
let cookieParser = require('cookie-parser');
let cookieSession = require('./middlewares/cookieSession');
let homeRouter = require('./routes/home');
let adminrouter = require('./routes/admin');





let userRouter = require('./routes/user');
let faqRouter = require('./routes/faq');
const { link } = require('fs');
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: 'GrupoTresTriMovie',
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieSession);

app.use('/', homeRouter);
app.use('/admin', adminrouter);
app.use('/user', userRouter);
app.use('/faq', faqRouter);

app.use('/peliculas',require('./routes/peliculas'))


app.use((req, res, next) => {
    res.status(404).render('404')
})

const handleError = require('./middlewares/handleErrors')
app.use(handleError);

app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

