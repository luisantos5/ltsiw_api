const Sequelize = require ('sequelize');
const sequelize = new Sequelize('grupo1in_database', 'grupo1in_user', 'Maz3fr2bLsVXSYna', {
    host: 'cps17.webserver.pt',
    dialect: 'mysql'
});

const adminschema = new Sequelize({
    nome: String,
    email: String
})

const admin = sequelize.adminschema

module.exports = router; 