let idGenerated = require('../../middlewares/idGenerated'),
    {JsonToObject, writeJson} = require('../../middlewares/ourLib');


let fs = require('fs'),
path = require('path');

const pathAbsolute = adress => path.join(__dirname, adress);


let data = JsonToObject(__dirname, './peliculas.json'); 
// JSON.parse(fs.readFileSync(pathAbsolute('./peliculas.json'), 'utf-8'))

idGenerated.useData(data)

let dataSave = (newData) => fs.writeFileSync(pathAbsolute('./peliculas.json'), JSON.stringify(newData), 'utf-8');

/* funcion para obtener id */
let newID = () => {
    let aux = 0
    if(!data.length>0) return 1;

    data.forEach(pelicula => {
        aux = pelicula.id>aux? pelicula.id : aux;
    })

    return aux+1
}

  
module.exports = {
    "data": data,

    "get": id => data.find(pelicula => pelicula.id === id),

    "add": pelicula => {
        pelicula.id = newID();
        dataSave([...data, pelicula])
    },

    "dlt": producto => {
        let index = data.indexOf(producto);
        data.splice(index,1)
        dataSave([...data])
    },

    "upd": (id, modifies) => {
        data.forEach(e => {
            if(e.id == id){
                e.id = +id,
                e.nombre = modifies.nombre,
                e.descripcion = modifies.descripcion,
                e.anio = modifies.anio,
                e.genero = modifies.genero,
                e.precio = modifies.precio,
                e.imagen = modifies.image? modifies.imagen : e.imagen
            }
        })
        dataSave(data);
    }
}