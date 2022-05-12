const clienteController = {
    login: (req, res) => {
        res.render('login');
    },
    cadastro: (req, res) => {
        res.render('cadastroCliente');
    }
};

    


module.exports = clienteController;