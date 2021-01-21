const dotenv = require('dotenv');
dotenv.config();
// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');
const databaseName = require('../utilities/databaseName');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(databaseName, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
	host: process.env.DATABASE_IP,
	dialect: 'postgres',
	port: process.env.DATABASE_PORT || 5432,
	idleTimeoutMillis: 0,
	connectionTimeoutMillis: 0,
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	logging: false,
});

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;
