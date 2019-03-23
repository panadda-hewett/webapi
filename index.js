// Import packages
const express = require('express')
const morgan = require('morgan')

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// Health check
app.use('/healthcheck', require('express-healthcheck')());
// First route
app.get('/', (req, res) => {
    res.json({"myapplication": [ { "version": "1.0",
    "description" : "pre-interview technical test",
    "lastcommitsha": "abc57858585"
} ]})
})



// Starting server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
