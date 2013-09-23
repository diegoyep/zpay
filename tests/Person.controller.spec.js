describe("Person controller", function(){
	var PersonController = require("../controllers/Person")
	var PersonModel = require("../data/models/Person.model");

	describe("Create functionality", function(){
		it("should create a new Person", function(next){
			var req = {
				body: {
					name: "Testing",
					FBToken: "nanaana"
				}
			}
			var res = {};
			var Mext =  function(){};
			var response = PersonController
									.createPerson(req, res, Mext);
			expect(response).toBe(true);
			next();
		});

	});

	describe("Fetch functionality ", function(){
		it("should return result from query", function(next){
			var req = {
				params: {
					name: "Testing'"
				}
			}
			var res = {};
			var done = function(){};
			var result = PersonController.fetchPerson(req, res, done);
			expect(result).toBeTruthy();
			next();
		})
	})

	


});