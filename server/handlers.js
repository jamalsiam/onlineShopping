var User=require('./models/userModel.js');

module.exports.handelUser = {
	getMethod : function(req, res)  {
        res.json({name:'jamals'})
	},
    postMethod:function (req,res) {
            console.log(req.body)
            res.json({data:'response from post method'})
	}
}

