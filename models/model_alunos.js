/* const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('grupo1in_database', 'grupo1in_user', 'Maz3fr2bLsVXSYna', {
    host: 'cps17.webserver.pt',
    dialect: 'mysql'
});
class Aluno extends Model {}

Aluno.init({
  nome: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'aluno' });

sequelize.sync().then().catch(error => {
    console.log(error); 
})
 */

module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("alunos", {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    } 
  });

  return Aluno;
};