const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

let pathAbsolute = (rutaRelativa) => path.resolve(__dirname, rutaRelativa)

const publicPath = pathAbsolute("./public"); 
app.use(express.static(publicPath));



app.get('/', (req, res) =>{
    res.sendFile(pathAbsolute('./views/home.html'))
});

app.get('/login.html', (req, res) =>{
    res.sendFile(pathAbsolute('./views/login.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(pathAbsolute('./views/register.html'))
});

app.get('/carrito', (req, res) =>{
    res.sendFile(pathAbsolute('./views/carrito.html'))
});

app.get('./src/views/admin/dashboard.html', (req, res) =>{
    res.sendFile(pathAbsolute('./views/carrito.html'))
});
app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));

app.get('/product-detail.html', (req, res) =>{
    res.sendFile(pathAbsolute('./views/product-detail.html'))
});