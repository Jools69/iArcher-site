const express = require('express');
const rounds = require('../controllers/roundsController');

const router = express.Router();

router.route('/').get(rounds.allRounds);

router.route('/:type')

module.exports = router;