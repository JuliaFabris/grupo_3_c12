module.exports = {
    "faq": (req, res) => {
        res.render('FAQ/terminos-condiciones')
    },
    "privacidad": (req, res) => {
        res.render('FAQ/privacidad')
    },
    "sobreNosotros": (req, res) => {
        res.render('FAQ/sobreNosotros')
    },
     "PerdiMiUsuario": (req, res) => {
        res.render('FAQ/lostPass')
    },
    "Contacto": (req, res) => {
        res.render('FAQ/Contacto')
    }
}

