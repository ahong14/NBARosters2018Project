var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Team = new Schema({
    teamID: {type: Number},
    abbrev: {type: String},
    region: {type: String},
    name: {type: String}
});

module.exports = mongoose.model('teams', Team);