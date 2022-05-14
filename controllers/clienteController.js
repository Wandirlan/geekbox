// const bcrypt = require('bcrypt');
// let hash = bcrypt.hashSync("1234", 10);
// console.log(hash);

const bancoClientes = [
    {
        email: "wandirlan.rocha1@outlook.com",
        senha:"123"
    }
]

console.log(bancoClientes[0].email);

const clienteController = {
    login: (req, res) => {
        res.render('login');
    },
    cadastro: (req, res) => {
        res.render('cadastroCliente');
    },
    autenticaLogin: (req, res) => {
        const { email, senha} = req.body;
        // const clienteEncontrado = bancoClientes.find((obj) => obj.email == email);
        if( email == bancoClientes[0].email){
            res.redirect("/");
        }
        else{
            res.redirect("cadastro");
        }
    }
};

    


module.exports = clienteController;