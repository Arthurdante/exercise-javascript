const {Sequelize} = require('sequelize')
const { development } = require('./config')

const sequelize = new Sequelize(development)
sequelize.sync()
    .then(() => (
        console.log("conectou ao banco de dados")
    ))
    .catch((error) => (
        console.log("não conectou ao banco de dados", error)
    ))

module.exports = sequelize