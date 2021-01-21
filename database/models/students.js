const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false,
		isEmail: true,
	},

	imageUrl: {
		type: Sequelize.STRING,
		isURL: true,
	},

	gpa: {
		type: Sequelize.DECIMAL,
		validate: {
			min: 0.0,
			max: 4.0,
		},
	},
});

module.exports = Student;
