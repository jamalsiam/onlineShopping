
var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// use schema to add it to mongo data base
var ItemSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

    images: [
        {
            image:{
                type: String
            }
        }
    ],

  name:{
    type:String
  },
  number:{
    type:String
  },
  category:{
        type:String
  },
  price:{
        type:String
  },
  off:{
        type:String
  }
  
});


module.exports = mongoose.model('onlineshopingitem', ItemSchema);
