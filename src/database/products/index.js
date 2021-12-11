let fs = require('fs')

let data = JSON.parse(fs.readFileSync('./src/database/products/peliculas.json', 'utf-8'))

let dataSave = newData => fs.writeFileSync('./src/database/peliculas.json', JSON.stringify(newData), 'utf-8')

/* funcion para obtener id */
let lastIndex = (planilla) => {
    let maxAux = planilla[planilla.length - 1].id
    let maxms = planilla.filter(registro => registro.id >= maxAux)
    if (maxms.lenght > 1) {
        return lastIndex(maxms + 1)
    }
    return maxms[0].id
}
  
module.exports = {
    "data": data,

    "get": id => data.find(pelicula => pelicula.id === id),

    "add": pelicula => {
        let id = lastIndex(data)+1
        pelicula.id =id

        data.push(pelicula)
        dataSave(data)
    },

    "dlt": producto => {
        let index = data.indexOf(producto)
        data.splice(index,1)
        dataSave(data)
    },
}