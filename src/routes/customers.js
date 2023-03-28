const express = require('express')
const customerRoutes = express.Router()

// TODO - Implement database model
customerRoutes.get('/', (req, res) => {
    res.send('Getting all customers from database.')
})

// TODO - Check the right prefix of customers api
customerRoutes.get('/:id', (req, res) => {
    res.send(`Get customer id: ${req.params.id} from database.`)
})

// TODO - Create an schema for POST body data
customerRoutes.post('/', (req, res) => {
    res.send('Creating new customer.')
})

customerRoutes.put('/:id', (req, res) => {
    res.send(`Updating customer id: ${req.params.id} from database.`)
})

// TODO - Do not allow deletion for guests
customerRoutes.delete('/:id', (req, res) => {
    res.send(`Deleting customer id: ${req.params.id} from database.`)
})

module.exports = customerRoutes