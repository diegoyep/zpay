module.exports = function(app) {
	app.get("/auth/facebook/callback", function(req, res , next){
		res.json({
			success: true
		});
	});		

};