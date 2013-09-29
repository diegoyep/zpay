var BaseController = require("./Base");
var personController = require("./Person");

module.exports = BaseController.extend({
	name: "Auth",
	authenticatedFacebook: function(req, res, next){
		res.json({
			success: true,
			data: []
		})
		//personController.findOrCreate(req, res, next);
	}




});