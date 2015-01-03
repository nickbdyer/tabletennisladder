var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: String 
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
