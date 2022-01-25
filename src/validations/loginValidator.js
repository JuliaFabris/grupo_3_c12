let { check, body } = require('express-validator');
const res = require('express/lib/response');
const { getUsers } = require('../database')
const bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('custom')
        .custom((value, {req}) => {
            let user = getUsers.find(user => user.email == req.body.email);
            
            if(!user) return false;

            return (bcrypt.compareSync(req.body.pass, user.pass));
        })
        .withMessage('Credenciales inválidas')
]