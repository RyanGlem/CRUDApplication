const { Student } = require('../database/models');

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
		]);
	} catch (error) {
		console.log(error);
	}
};

module.exports = seedDatabase;
