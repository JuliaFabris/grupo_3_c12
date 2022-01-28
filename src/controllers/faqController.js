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
     "perdiMiUsuario": (req, res) => {
        res.render('FAQ/lostPass')
    },
    "contacto": (req, res) => {
        res.render('FAQ/Contacto',{
            titulo:"Contactanos"
        })
    }
}

