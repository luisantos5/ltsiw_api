const admin = require('../models/model_admin');

const create = (req, res) => {

    const adminCreate = new admin({ 
        nome: req.body.nome, 
        email: req.gody.email
     });

     adminCreate.save(function (err, novoAdmin) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(novoAdmin); 
    })

} 

const list = (res) => {
    admin.find(function (err, admin) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(admin); 
    })
}

const getAdminByName = (req, res) => {
    aluno.find({
        nome: req.params.nome},
        function (err, admin) {
        if (err) {
            res.status(400).send(err); 
        }
        res.status(200).json(admin); 
    })
}

exports.create = create; 
exports.list = list;
exports.getAdminByName = getAdminByName; 