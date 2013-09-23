
/*
 * GET users listing.
 */

var Person = require('../controllers/Person');

module.exports = function(app) {
	app.post('/test', function(req, res, next){
		Person.createPerson(req, res, next);
	});
	app.get('/test/:name', function(req, res, next){
		Person.fetchPerson(req, res, next);
	})
}