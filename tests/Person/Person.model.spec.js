describe("Person model", function(){
	
	var PersonModel = require("../../data/models/Person");

	var person;
	

	describe("Create functionality", function(){
		beforeEach(function() {
			person = PersonModel({
				
				name: "ImanIdiot",
				FBToken: "nanana2",
				APIToken: "nanana"
			});
		});

		it("should create a new model", function(next){
			expect(person).toBeDefined();
			expect(person.save()).not.toBe('err');
			next();
		});
	});

	describe("Update functionality", function(){

		it("should update an existing model", function(next){
			var result = PersonModel.update({
				name : "ImanIdiot" 
			}, {
				FBToken: "batman"
			})
			expect(result).not.toBe(null);
			next();

		});
	});

	describe("Read functionality", function(){
		it("should find a record in collection"), function(next){
			var result = PersonModel.find({
				name: "ImanIdiot"
			});
			expect(result).not.toBe(null);
		}
	});

	describe("Delete functionality", function(){
		it("should delete record in collection"), function(next){
			PersonModel.remove({
				name: "ImanIdiot"
			});
			var result = PersonModel.find({
				name: "ImanIdiot"
			});
			expect(result).toBe(null);
 		}
	})


});