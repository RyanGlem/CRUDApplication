const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', (req, res, next) => {
	Campus.findAll()
		.then((students) => res.json(students))
		.catch((err) => console.error(err));
});

router.get('/:id', (req, res, next) => {
	Campus.findByPk(req.params.id)
		.then((campus) => {
			campus
				.getStudents()
				.then((students) => {
					res.json({ campus, students });
				})
				.catch((err) => {
					res.json({ campus });
				});
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
