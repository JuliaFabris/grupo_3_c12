const fs = require('fs');
const path = require('path');
const users = JSON.parse(fs.readFileSync(path.join8__dirname, "/users.json"), 'utf-8'));
const genres = JSON.parse(fs.readFileSync(path.join(__dirname, '/generos.json', 'utf-8'));
const movies = JSON.parse(fs.readFileSync(path.join(__dirname, '/peliculas.json', 'utf-8'));

module.exports = {
    getUsers: users,
    writeUsers: function (data) => fs.writeFileSync(path.join(__dirname, "../database/users.json"),JSON.stringify(data),"utf-8")),
    getGenres: genres, /*Completar*/
    getMovies: movies
}