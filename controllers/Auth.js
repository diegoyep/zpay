var BaseController = require("./Base");
var personController = require("./Person");

module.exports = BaseController.extend({
	name: "Auth",
	authenticatedFacebook: function(req, res, next){
		personController.findOrCreate(req, res, next);
	},
	authenticatedTwitter: function(req, res, next){
		//TO DO
	},
	authenticatedGoogle: function(req, res, next){
		//TO DO 
	}




});