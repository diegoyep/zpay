var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	
	name: String,
	email : String,
	FBToken : String,
	
});

module.exports = PersonSchema; 