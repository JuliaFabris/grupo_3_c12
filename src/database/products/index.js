let fs = require('fs')

let data = JSON.parse(fs.readFileSync('./src/database/products/peliculas.json', 'utf-8'))

let dataSave = newData => fs.writeFileSync('./src/database/peliculas.json', JSON.stringify(newData), 'utf-8')

/* funcion para obtener id */
let newID = () => {
    // let maxAux = planilla[planilla.length - 1].id
    // let maxms = planilla.filter(registro => registro.id >= maxAux)
    // if (maxms.lenght > 1) {
    //     return lastIndex(maxms + 1)
    // }
    // return maxms[0].id
    let aux = 0
    if(!data.length>0) return 1;

    data.forEach(e => {
        aux = e.id>aux? e.id : aux;
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
        let index = data.indexOf(producto)
        data.splice(index,1)
        dataSave(data)
    },
}