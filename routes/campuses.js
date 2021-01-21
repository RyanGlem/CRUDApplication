const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', function (req, res, next) {
	Campus.findAll()
		.then((students) => res.json(students))
		.catch((err) => console.error(err));
});

module.exports = router;
