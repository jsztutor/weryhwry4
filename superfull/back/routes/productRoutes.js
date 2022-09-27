

const express = require("express")
const { getAllProducts, CerateProducts, UpdateProducts, DeleteProducts } = require("../controllers/ProductControllers")


const router = express.Router()

router.get('/',getAllProducts)
router.post('/',CerateProducts)
router.put('/:id',UpdateProducts)
router.delete('/:id',DeleteProducts)

module.exports = router