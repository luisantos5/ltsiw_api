const dbConfig = require ('../config/db.config')
/* const Sequelize = require ('sequelize');
const sequelize = new Sequelize('grupo1in_database', 'grupo1in_user', 'Maz3fr2bLsVXSYna', {
    host: 'cps17.webserver.pt',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 }); */

const Sequelize = require ('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

sequelize.authenticate().then(function(errors) { 
    if (errors) {
        console.error('Unable to connect to the database:', errors);
    } else {
        console.log('connected to mysql');
    }
 });

 const db = {};
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
 db.alunos = require('./model_alunos') (sequelize, Sequelize);

 module.exports = db;
 
