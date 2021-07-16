const express = require('express');
const home = require('../controllers/homeController');

const router = express.Router();

router.route('/').get(home.index);

module.exports = router;