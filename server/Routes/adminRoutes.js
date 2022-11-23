const express = require('express');
const router = express.Router();
const { addNewAdmin } = require('../controllers/adminController');

// ADD NEW ADMIN
router.post('/createAdmin', addNewAdmin);

module.exports = router;