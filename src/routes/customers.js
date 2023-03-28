const express = require('express')
const customerRoutes = express.Router()

customerRoutes.get('/', (req, res) => {
    res.send('Getting all customers from database.')
})
// teste---


customerRoutes.get('/:id', (req, res) => {
    res.send(`Get customer id: ${req.params.id} from database.`)
})


customerRoutes.post('/', (req, res) => {
    res.send('Creating new customer.')
})


customerRoutes.put('/:id', (req, res) => {
    res.send(`Updating customer id: ${req.params.id} from database.`)
})

customerRoutes.delete('/:id', (req, res) => {
    res.send(`Deleting customer id: ${req.params.id} from database.`)
})

module.exports = customerRoutes