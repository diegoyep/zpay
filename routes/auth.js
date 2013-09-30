var authController= require('../controllers/Auth');

module.exports = function(app) {
	app.post("/auth/facebook/callback", function(req, res , next){
		authController.authenticatedFacebook(req, res, next);
	});	
		

};