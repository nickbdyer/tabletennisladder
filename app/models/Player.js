var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {type : String, default: ''},
  rank: Number
});

var Player = mongoose.model('Player', PlayerSchema);

var playerList = function(request, response, Player) {
  Player.find().sort('rank').exec(function(err, players) {
    if (err)
      response.send(err)
    response.json(players);
  })
};

module.exports = Player; 
