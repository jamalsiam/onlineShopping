var User=require('./models/userModel.js');
var Item=require('./models/itemModel.js');
var Cart=require('./models/cartModel');
module.exports.handelUser = {

    signUp: function(req, res) {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        if(password.length>=8){
        User.findOne({email: email})
            .exec(function (err, user) {
                if (user) {
                    res.json({data:'User already exist!'});
                } else {
                    // make a new user if not one
                    return User.create({
                        username: username,
                        email: email,
                        password: password
                    }, function (err, newUser) {
                        if(err){
                            res.json(err);
                        } else {
                            res.json({data:'signup',id:newUser._id});
                        }
                    });
                }
            });
        }else
            {
            res.json({data:'the password is short'})
        }
    },
    signIn:function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        User.findOne({email: email})
            .then(function (users) {
                if (!users) {
                    res.json({data:"user not found"})
                } else {
                    users.comparePasswords(password)
                        .then(function (isMatch) {
                            if (isMatch) {
                                res.json({data:"signin",id:users._id})
                            } else {
                                res.json({data:"password not matched"})
                            }
                        });
                }
            });
    },
    getUserName:function(req, res){
        User.findOne({_id:req.body.id})
            .then(function(user){
                if(!user){
                    res.json({data: 'fail'});
                } else {
                    res.json({data: 'success',username: user.username})
                }
            })
    },
    getUserInfo:function (req, res) {
        User.findById(req.body.id, function (err, user) {


            res.json({data :'success',
                     userName:user.username,
                     mobile:user.phone,
                     location:user.address,
                     email:user.email});
        } );
    },
    upDateProfile:function (req,res) {
        var username=req.body.username,
            mobile=req.body.mobile,
            location=req.body.location,
            id=req.body._id;

        if(mobile && username && location){
            User.update(
                {_id: id},
                {$set: {username:username, address:location, phone:mobile}})
                .then(function (user) {
                    res.json({data:"success"});
                })

        }
    },
    deleteAccount:function (req, res) {
        User.findOne({_id:req.body._id})
            .then(function (user) {
                user.comparePasswords(req.body.password)
                    .then(function (isMatch) {
                        if(isMatch) {
                            res.json({data:"success"});
                            User.findByIdAndRemove(req.body._id, (err, result) => {});
                        } else {
                            res.json({data:"password doesn't match"});
                        }
                    });
            });
    },
    getSale:function (req,res) {
        var record=[];

        Item.find({userId:req.body.id, 'images.0' : { $exists:true}})
            .sort('-_id')
            .select('userId name price category off images.$')
            .then(function (data) {
                res.json({sales:data})
            })
    }
}


module.exports.handelItem = {
    addItem:function (req,res) {
        var item=req.body;
        Item.create({
            userId:item.userId,
            images: item.image,
            name: item.name,
            number: item.number,
            category: item.category,
            price: item.price,
            off: item.off
        })
        .then(function(data){
            res.json({data:'success'})
        })
    },
    getOffer:function (req,res) {
        Item.find({ off : { $gte : '84' }, 'images.0' : { $exists:true}})
            .limit(8)
            .sort('-off')
            .select('userId name price off category  images.$')
            .then(function (data) {

            res.json({offers:data})
        })
    },
    getItemInfo:function (req,res) {
        var record=[];
        var id=req.body.id;
        Item.findOne({_id:id})
            .then(function (item) {
                if (item) {
                record.push({item:item});
                User.findOne({_id:item.userId})
                    .then(function (user) {
                        record.push({user:user});
                        res.json({info:record})
                    })
            } else{
                    res.json({info:fail})
                }
            })
    },
    deleteItem:function (req,res) {
        Item.remove({ _id:req.body.itemId,userId:req.body.userId }, function (err) {
            if (err) return handleError(err);
            res.json({data:"Deleted"})
        });
    },
    searchItem:function (req,res) {

       if(req.body.address===undefined){

          var q= Item.find({'images.0' : { $exists:true}});
               q.select('userId name price off category  images.$');
               if(req.body.name)
                   q.where('name').equals(req.body.name);
               if(req.body.category)
                   q.where('category').equals(req.body.category);
               q.then(function (item) {
                   res.json({search:item});
                   });


       } else {
           User.find({address:req.body.address})
            .select('_id')
            .then(function (id) {
                   var ids=[]
                   for(var i=0;i<id.length;i++)
                       ids.push(id[i]._id);
                  var q= Item.find( { userId: { $in :ids},'images.0' : { $exists:true}})
               if(req.body.category)
                   q.where('category').equals(req.body.category);
                q.where('name').equals(req.body.name)
                       q.select('userId name price off category images.$')
                       q.then(function (item) {
                           res.json({search:item})

                       })
           })
       }
    }
};


module.exports.handelCart={
    addToCart:function (req ,res) {
        Cart.findOne({userId:req.body.userId,
            itemId:req.body.itemId})
            .then(function (isFound) {
                if(isFound){
                    res.json({data:'',err:'Item already added on your cart'});
                } else {
                    Cart.create({userId:req.body.userId,// start create
                        itemId:req.body.itemId})
                        .then(function (done) {
                            if(done)
                                res.json({data:'Added on your cart',err:''});
                        });// end create
                }
            });
    },
    getCart:function (req ,res) {
         var ids=[];

         Cart.find({userId:req.body.id})
             .select('itemId')
             .then(function (data) {
                 for(var i=0;i<data.length;i++)
                     ids.push(data[i].itemId);
                 Item.find( { _id: { $in :ids   } })
                     .then(function (d) {
                        res.json({cart:d})
                     })
             })
    },
    removeItemFromCart:function (req ,res) {
        Cart.remove( req.body, function (err) {
            if (err) return handleError(err);
            res.json({data:"Deleted"})
        });
    }
};






