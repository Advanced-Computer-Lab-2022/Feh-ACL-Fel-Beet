const express = require('express')
const router = express.Router()
const { add, login } = require('../Controllers/corporateTraineeController')

router.post('/add', add)
router.post('/login', login)

module.exports = router