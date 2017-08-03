var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

// set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes
app.get('/', function(req, res){
    res.send('Hello world');
});


app.listen(3000);
console.log('Server started on port 3000');