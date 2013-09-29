describe("Authentication functionality", function() {
	var route = "http://localhost:3000/auth";
	var request = require('request');
	//var authController = require('../../controllers/Auth');

	describe("Facebook authentication", function(){
		var fbRoute = "/facebook/callback";
		it("should exist ", function(next){
			request.post(route + fbRoute, function(err, response, body){
				expect(response.statusCode).toEqual(200);
				next(); 
			});
		}); 

		it("should respond with json string", function(next){
			request.post(route + fbRoute, function(err, response, body){
				expect(typeof(JSON.parse(body))).toBe(typeof({}));
				next();
			});
		});

		it("should have success information", function(next){
			request.post(route + fbRoute, function(err, response, body) {
				expect(JSON.parse(body).success).toBeDefined(); 
				next();
			});
		});

		it("should have data information", function(next){
			request.post(route + fbRoute, function(err, response, body) {
				expect(JSON.parse(body).data).toBeDefined();
				next();
			});
		});
		
	});
});