//dependencies 
var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");

// required routes 
var apiRoutes = require('./routes/apiRoutes');
var htmlRoutes = require('./routes/htmlRoutes');

// PORT
var PORT = process.env.PORT || 8000;

// Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// starts server to begin listening 
app.listen(PORT, function () {
    console.log(`API is ready on ${PORT}!`);
});