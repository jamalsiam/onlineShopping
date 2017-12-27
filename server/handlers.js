var User=require('./models/userModel.js');
var Item=require('./models/itemModel.js')
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
                                console.log({data:"password "})
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
                     mobile:user.mobile,
                     location:user.location,
                     email:user.email});
        } );
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
    }
};