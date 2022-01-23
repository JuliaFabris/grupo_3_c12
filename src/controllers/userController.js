let {login, register} = require('../database')
const { users, writeUsersJson } = require('../data/index');
const { validationResult } = require('express-validator')

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            session: req.session,
            titulo:"Log In"})
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
                session: req.session
            })
        }
    },

    "registerPage": (req, res) => {
        res.render('register',{
            titulo:"Registro"})
    },


    register: (req, res) => {
        res.render("register",{
            title:"Register Trimovie"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            const {name, lastname, email, pass} = req.body;

            let lastId = 1;
            users.forEach(user => {
                if(user.id > lastId) {
                    lastId = user.id
                }
            });

            let user = {
                id: lastId + 1,
                name: name.trim(),
                lastname: lastname.trim(),
                email: email.trim(),
                pass: bcrypt.hashSync(pass, 12) , 
                rol: "ROL_USER",
                city:"",
                phone: "",
                address: "",
                zipCode: "",
                avatar: req.file ? req.file.filename : "AvatarChichiro.png",
            }
            users.push(user);

            writeUsersJson(users);
            res.redirect("/user/login")
        } else {
            console.log(errors)
            res.render("register", {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
   /* "register": (req, res) => {
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

