const {pathAbsolute, JsonToObject} = require('../../middlewares/ourLib');

let data = JsonToObject(__dirname, './favoritos.json');

module.exports = {
    "getFavoritesByUser": id => {
        let userList = [];
        data.forEach(register => {
            if(register.id === +id) userList = register.favorites;
        });

        return userList;
    },




}