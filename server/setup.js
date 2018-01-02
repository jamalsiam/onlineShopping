const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
var url=require('url');
const mongoose = require('mongoose');
var handlers = require('./handlers');


//middleware
//app.use(express.static(__dirname + '/../client/dist'));
app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



app.all('*',function (req,res,next) {
    var route= req.originalUrl.split('/');
    if(route[1]!=='api'){
        app.use(req.originalUrl, express.static(__dirname + '/../client/dist'));
    }
    next();
})


// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;



app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');


module.exports =app;
module.exports.handlers=handlers;