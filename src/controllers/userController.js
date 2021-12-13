let {login, register} = require('../database')

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            titulo:"Log In"})
    },

    "login": (req, res) => {
        let user = req.body.user
        let pass = req.body.pass
        if(login(user, pass)){
            res.redirect('home')
        }


    },

    "registerPage": (req, res) => {
        res.render('register',{
            titulo:"Registro"})
    },

    "register": (req, res) => {
        let {user, pass, nombre, apellido, email} = req.body
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email
        }
        if(register(user, pass, usuario)){
            res.redirect('home')
        }
    },

    "carrito": (req, res) => {
        res.send("soy el carrito")
    }
}
