

module.exports = {
    inicio: (req, res) => {
        res.render('user/home', {titulo: "Inicio"})
    }
}