const express = require('express')
const router = express.Router()
const { addNewCorporateTrainee } = require('../Controllers/corporateTraineeController')

router.post('/addCorporateTrainee', addNewCorporateTrainee)

module.exports = router