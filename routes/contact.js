const express = require('express');
const contact = require('../controllers/contactController');

const router = express.Router();

router.route('/').get(contact.index);

module.exports = router;