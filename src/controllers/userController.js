let {login, register} = require('../database')
const { users, writeUsersJson } = require('../database/index');
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
            let user = user.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
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


    "register": (req, res) => {
        res.render("register",{
            title:"Register Trimovie"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            const {name, lastname, email, pass, pass2} = req.body;

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
                avatar: req.file ? req.file.filename : "avatarChichiro.jpg",
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
    "carrito": (req, res) => {
        res.render("carrito",{
            title:"carrito"
        });
    }

}