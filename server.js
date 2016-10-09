var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'));

// Listen for requests
app.listen(port); 
console.log('Server running on port ' + port);       // shoutout to the user
exports = module.exports = app