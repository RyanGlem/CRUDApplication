const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

router.get('/', function (req, res, next) {
	Student.findAll()
		.then((students) => res.json(students))
		.catch((err) => console.log(err));
});

router.get('/:id', (req, res, next) => {
	Student.findByPk(req.params.id)
		.then((student) => {
			Campus.findByPk(student.campusId)
				.then((campus) => {
					res.json({ student, campus });
				})
				.catch((err) => {
					res.json({ student });
				});
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post('/', (req, res, next) => {
	Student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		imageUrl: req.body.imageUrl,
		gpa: parseFloat(req.body.gpa),
		campusId: req.body.campusId,
	})
		.then((student) => {
			res.json({ student });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.delete('/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((student) => {
			res.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});
// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
