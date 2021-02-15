const professores = require('../models/model_professores');

const create = (req, res) => {

    const professoreCreate = new professore({ 
        nome: req.body.nome, 
        email: req.gody.email
     });

     professoreCreate.save(function (err, novoProfessore) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(novoProfessore); 
    })

} 

const list = (res) => {
    professore.find(function (err, professores) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(professores); 
    })
}

const getTeachersByName = (req, res) => {
    professore.find({
        nome: req.params.nome},
        function (err, professores) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(professores); 
    })
}

exports.create = create; 
exports.list = list;
exports.getTeachersByName = getTeachersByName; 