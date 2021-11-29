let controller = {
    loginPage: (req, res) => {
        res.render('login',{
            Titulo:"Log In"})
    }
}

module.exports = controller