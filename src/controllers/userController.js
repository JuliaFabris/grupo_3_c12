let {login, register} = require('../database')
const { users, register } = require('../database/dataUser/index.js');
const { validationResult } = require('express-validator')

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            titulo:"Log In",
            session: req.session
        })
    },
    "login": (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 60000
               res.cookie("userTriMovi", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }

            res.locals.user = req.session.user;

            res.redirect('/')

        }else{
            res.render('login', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userTriMovi){
            res.cookie('userTriMovi', "", { maxAge: -1 })
        }
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
        res.render('carrito',{
            titulo:"soy el carrito"
        })

    },
   
}

