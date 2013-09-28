
/*
 * GET users listing.
 */

var Person = require('../controllers/Person');

module.exports = function(app) {
	app.post('/people/new', function(req, res, next){
		Person.createPerson(req, res, next);
	});
	app.get('/people/:email', function(req, res, next){
		Person.fetchPerson(req, res, next);
	});
}