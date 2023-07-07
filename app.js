
// Variaveis
    const express = require('express');

    const app = express();

    const handlebars = require('express-handlebars')

    const Sequelize = require('sequelize')





// Config 
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexão com banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })

// Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    // app.post:  É utilizado quando uma ha uma requisição em metodo POST;
    // Serve para receber dados de formularios;
    // Rotas do tipo POST não possíveis de acessar através da URL
    // é necessario ter o envio de dados por um metodo POST;
    app.post('/add', function(req, res){
        res.send('Formulario Recebido!')
    })












//Ultima linha do Código
    const port = 8081;
    app.listen(port, function(){

        console.log("Servidor rodando na url: http://localhost:8081")

    }) //http://localhost:8081