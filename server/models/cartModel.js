
var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// use schema to add it to mongo data base
var cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    itemId:{
        type: String,
        required: true
    }

});


module.exports = mongoose.model('onlineshopingcart', cartSchema);
