const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		isUrl: true,
		defaultValue: 'https://www.nationalpetregister.org/assets/img/no-photo.jpg',
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true,
	},
	description: {
		type: Sequelize.STRING,
	},
});
module.exports = Campus;
