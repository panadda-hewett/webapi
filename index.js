// Import packages
const express = require('express')
const morgan = require('morgan')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// Get variables
var pjson = require('./package.json');
// Health check
app.use('/healthcheck', require('express-healthcheck')());
// Get git last lastcommitsha
require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
    console.log('Last commit hash on this branch is:', stdout);
});
// First route
app.get('/', (req, res) => {
    res.json({"myapplication": [ { "version": pjson.version,
    "description" : pjson.description,
    "lastcommitsha": stdout
} ]})
})

// Starting server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
