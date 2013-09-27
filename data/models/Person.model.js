var mongoose = require('mongoose');
var PersonSchema = require('../schemas/person');

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;