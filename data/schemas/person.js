var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	_id: Number,
	displayName: String,
	email : String,
	FBToken : String,
	APIToken: String,
	
});

module.exports = PersonSchema; 