const express = require('express');
const {body, validationResult } = require('express-validator');
const { Sequelize } = require('sequelize/types');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./connect.js')
const alunos = require('./routes/route_alunos')
const professores= require('./routes/route_professores')
const auth = require('./auth')

app.use(express.json());

//auth
const auth = function(req, res, next) {
    utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next(); 
            } else {
                res.status(401).send("Invalid Token"); 
            }
        })
}

app.use(express.json());
app.use(auth); 
app.use('/', users)
app.use(alunos);
app.use(professores);
app.use(admin);

app.get('/', (req, res) => {
    console.log("Request Arrived!")
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Servidor a correr na porta " + port)
})

app.get('/', function (req,res) {
    res.send('Teste Aluno X ');
});
app.get('/help', function (req,res) {
    res.send('Página de ajuda ');
});


router.route('/')
    .get(function (req, res) {

        aluno.findById('5fa172f8194c7f3dc5870486').then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(400).json(error)
        })
    })
    .post(function (req, res) {
        const newAluno = new aluno({
            nome: req.body.nome,
            email: req.body.email
        })
        newAluno.save().then(result => {
            res.status(201).json(result)
        }).catch(error => {
            res.status(400).json(error)
        })
    })
    .put(function (req, res) {
        res.send('Alterar Aluno');
        res.send('Alterar Admin');
    })
    .delete(function (req, res) {
        res.send('Delete Aluno');
    })

    

 
