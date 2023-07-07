// Variaveis 

const Sequelize = require('sequelize')

// Config
    // Conexão com banco de dados MySQL
    const sequelize = new Sequelize('postApp', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}