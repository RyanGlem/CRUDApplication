const express = require('express');
const { set } = require('../database');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', (req, res, next) => {
	Campus.findAll()
		.then((students) => res.json(students))
		.catch((err) => next(err));
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
			next(err);
		});
});

router.post('/', (req, res, next) => {
	Campus.create({
		name: req.body.name,
		imageUrl: req.body.imageUrl,
		address: req.body.address,
		description: req.body.description,
	})
		.then((student) => {
			res.json(student);
		})
		.catch((err) => {
			next(err);
		});
});

router.delete('/:id', (req, res, next) => {
	Campus.find({
		where: {
			id: req.params.id,
		},
	})
		.then((result) => {
			Campus.destroy({
				where: {
					id: req.params.id,
				},
			})
				.then(() => {
					res.json(result);
				})
				.catch((err) => {
					next(err);
				});
		})
		.catch((err) => next(err));
});
module.exports = router;
