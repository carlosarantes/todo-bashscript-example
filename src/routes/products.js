const express = require('express')
const productsRoutes = express.Router()

productsRoutes.get('/', (req, res) => {
    res.send('Getting all products from database.')
})

productsRoutes.get('/:id', (req, res) => {
    res.send(`Get product id: ${req.params.id} from database.`)
})

productsRoutes.post('/', (req, res) => {
    res.send('Creating new product.')
})

productsRoutes.put('/:id', (req, res) => {
    res.send(`Updating product id: ${req.params.id} from database.`)
})

productsRoutes.delete('/:id', (req, res) => {
    res.send(`Deleting product id: ${req.params.id} from database.`)
})

module.exports = productsRoutes