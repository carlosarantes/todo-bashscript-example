const express = require('express')
const employeesRoutes = express.Router()

employeesRoutes.get('/', (req, res) => {
    res.send('Getting all employees from database.')
})

employeesRoutes.get('/:id', (req, res) => {
    res.send(`Get employee id: ${req.params.id} from database.`)
})

employeesRoutes.post('/', (req, res) => {
    res.send('Creating new employee.')
})

employeesRoutes.put('/:id', (req, res) => {
    res.send(`Updating employee id: ${req.params.id} from database.`)
})

employeesRoutes.delete('/:id', (req, res) => {
    res.send(`Deleting employee id: ${req.params.id} from database.`)
})

module.exports = employeesRoutes