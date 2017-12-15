const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session');
var handlers = require('./handlers.js')

//middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/api/getmethod',handlers.handelUser.getMethod);
app.post('/api/postmethod',handlers.handelUser.postMethod)


app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;
