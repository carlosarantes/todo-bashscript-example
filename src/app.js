const express = require('express');
const router = require('./router')

const app = express();
app.use(router)

app.get('/health', (req, res) => {
    res.send('Ok. It\'s working')
})

module.exports = app;