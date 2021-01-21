const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {
	try {
		await Promise.all([
			Campus.create({
				name: 'Brooklyn College',
				imageUrl: 'https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg',
				address: '2900 Bedford Ave, Brooklyn, NY 11210',
				description:
					'Brooklyn College is a public college in Brooklyn, New York. It is part of the City University of New York and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus.',
			}),
			Student.create({
				firstName: 'Kyrie',
				lastName: 'Irving',
				email: 'foo@bar.com',
				imageUrl: 'https://scx2.b-cdn.net/gfx/news/2018/83-researchersi.jpg',
				gpa: 3.0,
				campusId: 1,
			}),
			Student.create({
				firstName: 'Daniel',
				lastName: 'Moore',
				email: 'foo@baz.com',
				gpa: 3.4,
				campusId: 1,
			}),
			Student.create({
				firstName: 'Matthew',
				lastName: 'Scott',
				email: 'bar@baz.com',
				gpa: 2.7,
				campusId: 1,
			}),
			Student.create({
				firstName: 'Joseph',
				lastName: 'Taylor',
				email: 'baz@bar.com',
				gpa: 3.9,
				campusId: 1,
			}),
		]);
	} catch (error) {
		console.log(error);
	}
};

module.exports = seedDatabase;
