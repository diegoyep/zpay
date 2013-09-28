var BaseController = require("./Base"),
	Person = require("../data/models/Person.model");

module.exports = BaseController.extend({
	name: "Person",
	createPerson: function(req, res , next){
		Person.create(req.body, function(err){
			if(err) {
				if(err.code === 11000) res.send('Conflict', 409);
				else next(err)	;
				return;
			}

		});
	},
	fetchPerson: function(req, res, next){
		var person = Person.findOne({
				email : req.params.email }, function(err, person){
				if(err) {
					return next(err);
				}
				if (!person) { 
					return false; 
				}
			});	
		req.person = person;
		next();
	}

});
