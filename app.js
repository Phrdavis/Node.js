
// Variaveis
    const express = require('express');

    const app = express();

    const handlebars = require('express-handlebars')

    const bodyParser = require('body-parser')

    const Post = require('./Models/Post')





// Config 
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
    runtimeOptions: {
              allowProtoPropertiesByDefault: true,
        
              allowProtoMethodsByDefault: true,
            }}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    

// Rotas
    app.get('/', function(req, res){
        // Pegando todos os posts criados dentro do banco 
        // Redirecionando rota para pagina 'home'
        // Ordenando por id mais recente para o mais antigo

        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    // app.post:  É utilizado quando uma ha uma requisição em metodo POST;
    // Serve para receber dados de formularios;
    // Rotas do tipo POST não possíveis de acessar através da URL
    // é necessario ter o envio de dados por um metodo POST;
    app.post('/add', function(req, res){
        
        // Inserindo conteudo dentro da tabela Postagens
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+ erro)
        })

    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Essa postagem não existe!")
        })
    })












//Ultima linha do Código
    const port = 8081;
    app.listen(port, function(){

        console.log(`Servidor rodando na url: http://localhost:${port}`)

    }) //http://localhost:8081