const express = require('express')
const employees = require('./routes/employees')
const customers = require('./routes/customers')
const products = require('./routes/products')
const router = express.Router()

router.use('/employees', employees)
router.use('/customers', customers)
router.use('/products', products)

module.exports = router;