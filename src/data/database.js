let fs = require("fs")

module.exports = {
    getPeliculas: JSON.parse(fs.readFileSync('./src/data/peliculas.json', 'utf-8')),

    getGeneros: JSON.parse(fs.readFileSync('./src/data/generos.json', 'utf-8')),

    aniosEnLista: lista => {
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