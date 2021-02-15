var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_alunos')
const { validationResult, body, param } = require('express-validator')

router.get('/',  function (req, res) {
    controller.list(res); 
})

router.get('/:nome', [
    param('nome').notEmpty().escape(), 
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.getStudentsByName(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.post('/', [
    body('nome').notEmpty().escape(), 
    body('emial').notEmpty().isEmail(),
],  function (req, res) {
    const errors = validationResult(req); 
    if (errors.isEmpty()) {
        controller.create(req, res); 
    } else {
        res.status(404).json({errors: errors.array()})
    }
})


module.exports = router