/* const aluno = require('../models/model_alunos');

const create = (req, res) => {

    const alunoCreate = new aluno({ 
        nome: req.body.nome, 
        email: req.gody.email
     });

    alunoCreate.save(function (err, novoAluno) {
        if (err) {
            res.status(400).create(err); 
        }
        res.status(200).json(novoAluno); 
    })

} 

const list = (res) => {
    aluno.findAll(function (err, alunos) {
        if (err) {
            res.status(400).create(err); 
        }
        res.status(200).json(alunos); 
    })
} */

/* const getStudentsByName = (req, res) => {
    aluno.find({
        nome: req.params.nome},
        function (err, alunos) {
        if (err) {
            res.status(400).create(err); 
        }
        res.status(200).json(alunos); 
    })
} */

/* exports.create = create; 
exports.list = list;
exports.getStudentsByName = getStudentsByName;  */

const db = require("../models/model_alunos");
const Aluno = db.alunos;
/* const Op = db.Sequelize.Op; */

// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Aluno.findAll({ where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};