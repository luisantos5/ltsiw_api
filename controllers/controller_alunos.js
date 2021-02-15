const alunos = require('../models/model_alunos');

const create = (req, res) => {

    const alunoCreate = new aluno({ 
        nome: req.body.nome, 
        email: req.gody.email
     });

    alunoCreate.save(function (err, novoAluno) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(novoAluno); 
    })

} 

const list = (res) => {
    aluno.find(function (err, alunos) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(alunos); 
    })
}

const getStudentsByName = (req, res) => {
    aluno.find({
        nome: req.params.nome},
        function (err, alunos) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(alunos); 
    })
}

exports.create = create; 
exports.list = list;
exports.getStudentsByName = getStudentsByName; 