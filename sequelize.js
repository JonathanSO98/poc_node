const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'poc_node', 'pocnodejs', {
    dialect: 'postgres',
    host: 'database-1.cildlqxmbezr.us-east-1.rds.amazonaws.com',
    port: 5432,
    logging: false,
    define: { timestamps: false }
})

module.exports = sequelize;