const dotenv = require('dotenv');
dotenv.config();
const pgtools = require('pgtools');

// An object with user, host, port, and password properties;
const config = {
	user: process.env.DATABASE_USERNAME || 'postgres',
	host: process.env.DATABASE_IP || 'localhost',
	port: process.env.DATABASE_PORT || 5432,
	password: process.env.DATABASE_PASSWORD,
};

// The name of the database to create;
const databaseName = require('./databaseName');

// A callback that takes an error argument;
// If cb is omitted the function will return a Promise;
const cb = (err, res) => {
	console.log(`Attempting to create the database: ${databaseName}!`);

	if (err) {
		console.error(err);
		process.exit(-1);
	}

	console.log(res);
	console.log(`Successfully created the database: ${databaseName}!`);
};

const createLocalDatabase = () => pgtools.createdb(config, databaseName, cb);

module.exports = createLocalDatabase;
