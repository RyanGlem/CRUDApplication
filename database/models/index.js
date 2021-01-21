// Here, we can prepare to register our models,
//set up associations between tables,
//and generate a barrel file for the models;

const Student = require('./students');
const Campus = require('./campuses');

Campus.hasMany(Student, { as: 'Students' });

module.exports = {
	Student,
	Campus,
};
