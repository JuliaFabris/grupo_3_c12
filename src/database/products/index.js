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
    "all": Array.from(data),

    "get": id => data.find(pelicula => pelicula.id === id),

    "add": pelicula => {
        let object = {
            id : newID(),
            ...pelicula
         }
           /*  movie.id = +id,
            movie.name = pelicula.name,
            movie.description = pelicula.description,
            movie.age = pelicula.age,
            movie.category = pelicula.category,
            movie.price = pelicula.price,
            movie.image = pelicula.file? pelicula.file : movie.image */
        dataSave([...data, object])
    },

    "dlt": producto => {
        let index = data.indexOf(producto);
        data.splice(index,1)
        dataSave([...data])
    },

    "upd": (id, modifies) => {
        data.forEach(movie => {
            if(movie.id == id){
                movie.id = +id,
                movie.name = modifies.name,
                movie.description = modifies.description,
                movie.age = modifies.age,
                movie.category = modifies.category,
                movie.price = modifies.price,
                movie.image = modifies.file? modifies.file : movie.image
            }
        })
        dataSave(data);
    }
}