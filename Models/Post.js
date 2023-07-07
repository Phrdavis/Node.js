const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Tabela já criada
// Post.sync({force: true})


//Serve para acessar a variavel Post em outros arquivos
module.exports = Post