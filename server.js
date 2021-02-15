const express = require('express');
const {body, validationResult } = require('express-validator');
const { Sequelize } = require('sequelize/types');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./connect.js')

app.use(express.json());

//teste
app.get('/', (req, res) => {
    console.log("Request Arrived!")
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Servidor a correr na porta " + port)
})

app.get('/', function (req,res) {
    res.send('Já sei programar ');
});
app.get('/help', function (req,res) {
    res.send('não ha nada para ver ');
});

//teste
/* 
const alunoschema = new Sequelize({
    nome: String,
    idade: Number,
    telemovel: Number,
    email: String,
    nif: Number,
    localidade: String
})

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
            idade: req.body.idade,
            telemovel: req.body.telemovel,
            email: req.body.email,
            nif: req.body.nif,
            localidade: req.body.localidade
        })
        newAluno.save().then(result => {
            res.status(201).json(result)
        }).catch(error => {
            res.status(400).json(error)
        })
    })
    .delete(function (req, res) {
        res.send('Delete Aluno');
    })

    module.exports = router; 

 */
