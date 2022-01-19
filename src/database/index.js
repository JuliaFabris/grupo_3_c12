const fs = require("fs");
const path = require("path");

module.exports = {
  generos: JSON.parse(
    fs.readFileSync(path.join(__dirname, "/generos.json"), "utf-8")
  ),
  products: JSON.parse(
    fs.readFileSync(path.join(__dirname, "/peliculas.json"), "utf-8")
  ),
  /*Lee el archivo Json y lo parsea*/

  writePeliculasJson: (data) => {
    fs.writeFileSync(
      path.join(__dirname, "../database/peliculas.json"),
      JSON.stringify(data),
      "utf-8"
    );

    /*Nos permite guardar o actualizar nuestra información sobreescribir nuestro JSON*/
  },
  users: JSON.parse(
    fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")
  ),

  writeUsersJson: (data) => {
    fs.writeFileSync(
      path.join(__dirname, "../database/users.json"),
      JSON.stringify(data),
      "utf-8"

    );
  }

};


/*const { array } = require('../middlewares/uploadProductFile');
let peliculas = require('./products'),
    generos = require('./generos'),
    usuarios = require('./dataUser'),
    favoritos = require('./favorites');

module.exports = {
    "tablePeliculas": peliculas,
    "tableGeneros": generos,
    "tableFavorites": favoritos,
    "getGeneros": generos.data,
    "login": usuarios.login,
    "register": usuarios.register,
    "aniosEnLista": lista => {
        let mySet = new Set()
        lista.forEach(pelicula => {
            mySet.add(pelicula.anio)
        });

        return Array.from(mySet)
    }

}
/* 
// extraer generos 
let saveGeneros = () => {
    let mySet = new Set()
    getPeliculas.forEach(pelicula => {
        pelicula.genero.forEach(genero => {
            mySet.add(genero)
        });
    });
    let generos = Array.from(mySet)

    let tablaGeneros = []

    generos.forEach((genero, index) => {
        let registro = {id: index+1, nombre: genero}
        tablaGeneros.push(registro)
    });

    fs.writeFileSync('generos.json', JSON.stringify(tablaGeneros), 'utf-8')
}
saveGeneros() */
