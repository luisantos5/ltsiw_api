const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('grupo1in_database', 'grupo1in_user', 'Maz3fr2bLsVXSYna', {
    host: 'cps17.webserver.pt',
    dialect: 'mysql'
});
class Professor extends Model {}

Professor.init({
  nome: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'professor' });

sequelize.sync().then().catch(error => {
    console.log(error); 
})


/* const professoreschema = new Sequelize({
    nome: String,
    email: String
})

const professores = sequelize.professoreschema

module.exports = router; */
