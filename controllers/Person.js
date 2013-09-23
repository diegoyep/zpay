var BaseController = require("./Base"),
	Person = require("../data/models/Person.model");


module.exports = BaseController.extend({
	name: "Person",
	createPerson: function(req, res, next){
		Person.create(req.body, function(err){
			if (err) {
				if(err.code === 11000){
					res.send('Conflict', 409);
				} else { next(err);}
				return;
			}
			

		});
	},
	fetchPerson: function(req, res, next){
		var person = Person.findOne(
			{name: req.params.name}, function(err){
				if(err){
					console.log("No user");
				}
				res.json(wrap(person));
		});
	}

});

//this is fucked up, que es lo que estas haciendo?
//crea los cuatro controles CRUD	