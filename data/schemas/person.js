var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name: String,
	FBToken : String,
	APIToken : String
});

module.exports = PersonSchema; 