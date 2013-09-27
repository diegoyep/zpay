describe("MongoDB on Mongoose", function(){
	it("should be a server running ", function(next){
		var dbURL = 'mongodb://localhost/test';
		var db = require('mongoose').connect(dbURL);
		expect(db).toBeDefined();
		next(); 
	})
})