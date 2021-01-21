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

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
