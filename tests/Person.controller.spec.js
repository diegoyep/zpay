describe("Person controller", function(){
	var PersonController = require("../controllers/Person")
	var PersonModel = require("../data/models/Person.model");

	describe("Create functionality", function(){
		it("should create a new Person", function(next){
			var result = PersonController.createPerson(
				{body: {
					name: "Nanana",
					FBToken: "tumama"
				}}, {}, function(){
				})
			expect(result).toBeDefined();
			next();
		});
	});
});