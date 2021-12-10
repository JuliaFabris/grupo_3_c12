

module.exports = {
    loginPage: (req, res) => {
        res.render('login',{
            titulo:"Log In"})
    },

    registerPage: (req, res) => {
        res.render('register',{
            titulo:"Registro"})
    }
}
