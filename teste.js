const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', '',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro)
})