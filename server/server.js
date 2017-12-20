const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');

const mongoose = require('mongoose');

var handlers = require('./handlers.js');

//middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;


app.post('/api/signup',handlers.handelUser.signUp)
app.post('/api/signin',handlers.handelUser.signIn)


app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;
