
const express = require('express');

const app = express();

const handlebars = require('express-handbars')

const Sequelize = require('sequelize')





// Config 
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexão com banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })

// Rotas

    app.get('/cad', function(req, res){
        res.send("RETA DE CADASTRO DE POSTS")
    })












//Ultima linha do Código
const port = 8081;
app.listen(port, function(){

    console.log("Servidor rodando na url: http://localhost:8081")

}) //http://localhost:8081