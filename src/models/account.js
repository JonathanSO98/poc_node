const Sequelize = require('sequelize');
const database = require('../../sequelize');
const Accounts = database.define('account', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING }
})

module.exports = Accounts;