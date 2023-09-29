const sequelize = require('../database.js')

const Pessoa = sequelize.define('pessoa', {})

module.exports = Pessoa