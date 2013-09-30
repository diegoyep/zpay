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
		it("should respond with user ", function(next){
			var data = { id: '600351291',
					  username: 'diegoyep',
					  displayName: 'Diego Yepes',
					  name: 
					   { familyName: undefined,
					     givenName: undefined,
					     middleName: undefined },
					  gender: undefined,
					  profileUrl: undefined,
					  emails: [ { value: 'diegoal_189@hotmail.com' } ],
					  photos: [ { value: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/174009_600351291_1917724387_q.jpg' } ],
					  provider: 'facebook',
					  _raw: '{"id":"600351291","email":"diegoal_189\\u0040hotmail.com","username":"diegoyep","name":"Diego Yepes","picture":{"data":{"url":"https:\\/\\/fbcdn-profile-a.akamaihd.net\\/hprofile-ak-ash3\\/174009_600351291_1917724387_q.jpg","is_silhouette":false}}}',
					  _json: 
					   { id: '600351291',
					     email: 'diegoal_189@hotmail.com',
					     username: 'diegoyep',
					     name: 'Diego Yepes',
					     picture: { data: [Object] } },
					  accessToken: 'CAAHWFZCkXZC9gBAO83OM9fv2WJRZBgVkHaBsfAmKhbH0n9AZCAhGyIutSy80C1kcMglvlNsoHoZC7zuhnccDCEqpIxg7gHwtfqZCzlvBoCbO3bF8fF0VZAI0nToK8YkZCfFamSSmk3hb6BbTuuQjGTlwewm43GP2OK4bNyxH6oE56nnrdnqbYO9XsSp4KNeK9BkZD' };

			request.post(route + fbRoute, {json: data}, function(err, response, body) {
				expect(body.data[0].id).toBeDefined();
				next();
			});
		});
		
	});
});