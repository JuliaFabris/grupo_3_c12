let {login, register} = require('../database')

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            titulo:"Log In"})
    },

    "login": (req, res) => {
            res.redirect('/')
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
            res.redirect('/home')
        }else res.send("algo paso en el registro")
    },

    "carrito": (req, res) => {
        res.render('carrito'),{
            titulo:("soy el carrito")
        }

    },
   
}
