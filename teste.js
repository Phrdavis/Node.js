
//Criando variavel para chamar o modulo do sequelize
const Sequelize = require("sequelize");

//Atribuindo os dados do banco em uma variavel
const sequelize = new Sequelize('test', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

//Autenticando os dados do banco
sequelize.authenticate().then(function(){
    //Mensagem de Sucesso
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    //Mensagem de erro
    console.log("Falha ao se conectar: "+ erro)
})


//Criando Models/Tabelas no Banco
const Postagem = sequelize.define('postagem', {
    //Definindo colunas
    titulo: {
        //Definindo tipo da coluna
        //Tipo STRING tem limite de caracteres
        type: Sequelize.STRING
    },
    conteudo: {
        //Tipo TEXT não tem limite de caracteres
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Atualizar conteudo

// Postagem.create({
//     titulo: "OPA",
//     conteudo: "isso ai"
// })

// Usuario.create({
//     nome: "Davi",
//     sobrenome: "Pinheiro",
//     idade: 21,
//     email: "davipi_sou@hotmail.com"
// })

//Sincronizando Model com o MySQL
//force: true faz com que a tabela sempre seja criada 

// Postagem.sync({force: true})
// Usuario.sync({force: true})