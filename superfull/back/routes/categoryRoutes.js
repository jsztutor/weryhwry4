
const express = require("express")

const {getAllcat} = require('../controllers/CategoryControllers.js')

const router = express.Router()

router.get('/',getAllcat)


module.exports = router