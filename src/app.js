const express = require('express');
const router = require('./router')

const app = express();
app.use(router)

// TODO - Change to a proper health check message
app.get('/health', (req, res) => {
    res.send('Ok. It\'s working')
})

module.exports = app;