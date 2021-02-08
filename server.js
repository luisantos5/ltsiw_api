const express = require('express');
const {body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log("Servidor a correr na porta " + port)
})

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('grupo1in_database', 'grupo1in_user', 'Maz3fr2bLsVXSYna', {
    host: 'cps17.webserver.pt',
    dialect: 'mysql', 
});


