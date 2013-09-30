var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	id:String,
	provider: String,
	displayName: String,
	email : String,
	FBToken : String,
	APIToken: String,
	profilePic: String,
	activity: { type: Array, default: []},
	places: { type:Array, default:[]},
	people: { type: Array, default:[] },
	geoData:{type: Array, default:[]}
	
});

module.exports = PersonSchema; 