const express = require('express')
const router = express.Router()
const { login, logout, signup } = require('../Controllers/guestController');

router.post('/login', login);

router.get('/logout', logout);

router.post('/signup', signup);

module.exports = router