const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {
	try {
		await Promise.all([
			Student.create({
				firstName: 'Kyrie',
				lastName: 'Irving',
				email: 'foo@bar.com',
				imageUrl: 'https://scx2.b-cdn.net/gfx/news/2018/83-researchersi.jpg',
				gpa: 3.0,
			}),
			Campus.create({
				name: 'Brooklyn College',
				imageUrl: 'https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg',
				address: '2900 Bedford Ave, Brooklyn, NY 11210',
				description:
					'Brooklyn College is a public college in Brooklyn, New York. It is part of the City University of New York and enrolls about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus.',
			}),
		]);
	} catch (error) {
		console.log(error);
	}
};

module.exports = seedDatabase;
