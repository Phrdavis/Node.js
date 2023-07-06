
const express = require('express');

const app = express();



app.get("/", function(req, res){

    res.sendFile(__dirname+ "/Html/index.html");

});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+ "/Html/sobre.html");
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>" + "<p>Seu cargo e "+req.params.cargo+"</p>");
})













const port = 8081;

//Ultima linha do Código
app.listen(port, function(){

    console.log("Servidor rodando na url: http://localhost:8081")

}) //http://localhost:8081