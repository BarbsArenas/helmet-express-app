/** 
* 
* Your test output will go here 
* 
* 
*/

var express = require('express');
var app = express();

var helmet = require('helmet');

app.use(helmet());

module.exports = app;