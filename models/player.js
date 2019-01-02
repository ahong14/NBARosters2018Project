var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Player = new Schema({
    name:{type: String},
    college:{type: String},
    position:{type: String},
    teamID: {type: Number}
});

module.exports = mongoose.model('players', Player);