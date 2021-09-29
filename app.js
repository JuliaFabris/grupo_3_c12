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

app.listen(PORT, ()=>console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));