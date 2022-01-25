<<<<<<< HEAD
let {login, register} = require('../database')
=======
const { getUsers, writeUsers } = require('../database');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
>>>>>>> 5714a1fea4cd4d315460de2437247f40e39555a9

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            titulo:"Log In"})
    },

    "login": (req, res) => {
<<<<<<< HEAD
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
=======
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = getUsers.find(user => user.email === req.body.email);
           
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
               res.cookie("userTrimovie", req.session.user, {
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
                titulo: "login",
            })
        }
    },

    "registerPage": (req, res) => {
        res.render("register",{
            title:"Register Trimovie"
        });
    },

    "processRegister": (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            const { name, lastname, email, pass1 } = req.body;

            let lastId = 1;
    
            getUsers.forEach(user => {
                if(user.id > lastId) {
                    lastId = user.id
                }
            });
    
            let user = {
                id: lastId + 1,
                name: name.trim(),
                lastname: lastname.trim(),
                email: email.trim(),
                pass: bcrypt.hashSync(pass1, 12) , 
                rol: "ROL_USER",
                city:"",
                phone: "",
                address: "",
                zipCode: "",
                avatar: req.file ? req.file.filename : "AvatarChichiro.png",
            }
            
            writeUsers([...getUsers, user]);
            res.redirect("/user/login")
                        
        }else{
            res.render("register", {
                errors: errors.mapped(),
            })
        }
>>>>>>> 5714a1fea4cd4d315460de2437247f40e39555a9
    },

    "carrito": (req, res) => {
        res.render("carrito",{
            title:"carrito"
        });
    },

}