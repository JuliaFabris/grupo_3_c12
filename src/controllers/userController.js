const { getUsers, writeUsers } = require('../database');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    "loginPage": (req, res) => {
        res.render('login',{
            titulo:"Log In"})
    },

    "login": (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = getUsers.find(user => user.email === req.body.email);
           
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
                titulo: "login",
            })
        }
    },

    "registerPage": (req, res) => {
        res.render("register",{
            title:"Register Trimovie"
        });
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

            const {name, lastname, email, pass, pass2} = req.body;

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
                pass: bcrypt.hashSync(pass, 12) ,
                rol: "ROL_USER",
                city:"",
                phone: "",
                address: "",
                zipCode: "",
                avatar: req.file ? req.file.filename : "avatarChichiro.jpg",
            }
            
            writeUsers([...getUsers, user]);
            res.redirect("/user/login")
                        
        }else{
            res.render("register", {
                errors: errors.mapped(),
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userTrimovie){
            res.cookie('userTrimovie', "", { maxAge: -1 })
        }
        res.redirect('/')
    }, 
    profile: (req, res) => {
        let user = users.find(user => user.id === req.session.user.id)

        res.render('userProfile', {
            titulo,
            user, 
            session: req.session
        })
    },

    "carrito": (req, res) => {
        res.render("carrito",{
            title:"carrito"
        });
    }

}