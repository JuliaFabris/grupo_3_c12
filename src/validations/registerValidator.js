const { check, body } = require('express-validator');
const {getUsers} = require('../database')
const bcrypt = require("bcryptjs");

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es necesario'),

    check('lastname')
    .notEmpty()
    .withMessage('El apellido es necesario'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom((value) => { /*Comparamos las contraseñas*/
       let user = getUsers.find(user=>{ 
            return user.email == value 
        })

        if(user){
            return false
        }else{
            return true
        }
    }).withMessage('Email registrado'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),
    
    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]