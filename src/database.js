const {Sequelize} = require('sequelize')
const {Develoment} = require('./config')

const sequelize = new Sequelize(Develoment)
sequelize.sync()
    .then(() => (
        console.log("conectou ao banco de dados")
    ))
    .catch((error) => (
        console.log("não conectou ao banco de dados", error)
    ))

module.exports = sequelize