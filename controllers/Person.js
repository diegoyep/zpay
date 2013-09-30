var BaseController = require("./Base"),
	Person = require("../data/models/Person"),
	hat = require('hat');

module.exports = BaseController.extend({
	name: "Person",
	// createPerson: function(req, res , next){
	// 	Person.create(req.body, function(err){
	// 		if(err) {
	// 			if(err.code === 11000) res.send('Conflict', 409);
	// 			else next(err)	;
	// 			return;
	// 		}

	// 	});
	// },
	// fetchPerson: function(req, res, next){
	// 	var person = Person.findOne({
	// 			email : req.params.email }, function(err, person){
	// 			if(err) {
	// 				return next(err);
	// 			}
	// 			if (!person) { 
	// 				return false; 
	// 			}
	// 		});	
	// 	req.person = person;
	// 	next();;
	// },
	findOrCreate: function(req ,res, next){
		if(req.body.id){
			Person.findOne({
				id: req.body.id
			}, function(err, person){
				var response ={} ;
				var profile = req.body;
				if(err) {
					response.success = false;
					response.data = [];
					res.json(response);
				} 
				if(!person){
					var apiToken = hat();
					var newPerson = new Person({
						id: profile.id,
						displayName: profile.displayName,
						email: profile.emails.value,
						profilePic: profile.photos.value,
						FBToken: profile.accessToken,
						APIToken: apiToken,
						provider : profile.provider
					});
					newPerson.save(function(err){
						if(err){
							response.success = false;
							response.data = [];
							res.json(response);
						}
					});
					response.success = true;
					response.data = [newPerson];
					res.json(response);
				}
				response.success = true;
				response.data = [person] ;
				res.json(response);
			});
		} else {
			
			res.json({
				success:false,
				data:[]
			});
		}
		
	 }

});
