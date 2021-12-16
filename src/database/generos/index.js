let idGenerated = require('../../middlewares/idGenerated'),
    {JsonToObject, writeJson} = require('../../middlewares/ourLib');

let data = JsonToObject(__dirname, './generos.json') //JSON.parse(fs.readFileSync(pathAbsolute(__dirname,'./generos.json'), 'utf-8'))

// configuro el generador de id
idGenerated.useData(data);

module.exports = {
    "all": data,

    "get": id => {
        let genero = undefined;

        data.forEach(register => {
            if (register.id === id) genero = register;
        });

        return genero
    },

    "upd": (id, newName) => {
        data.forEach(register => {
            if(register.id === id) {
                register.nombre = newName
                writeJson(__dirname, './generos.json', [...data]);
                return true;
            }
        })

        return false;
    },

    "dlt": genero => {
        let index = data.indexOf(genero);
        data.splice(index, 1)
        writeJson(__dirname, './generos.json', [...data]);
    },

    "add": newRegister => {
        newRegister.id = idGenerated.newId();
        writeJson(__dirname, './generos.json', [...data, newRegister]);
    }
}