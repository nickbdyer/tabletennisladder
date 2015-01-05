var Player = require('./models/Player');
var routes = function(app, router) {


  router.route('/players')

    .get(function(request, response) {
      Player.find().sort('rank').exec(function(err, players) {
        if (err)
          response.send(err)
        response.json(players);
      });
    })

  .post(function(request, response){
    Player.create({
      name : request.body.name,
      rank : request.body.rank
    }, function(err, player) {
      if (err)
        response.send(err)
      Player.find(function(err, players) {
        if (err)
          response.send(err)
        response.json(players);
      });
    });
    console.log(Player.find())  
  });

  app.use('/api', router);

  router.route('/players/:player_id')
    .get(function(request, response){
      Player.findById(request.params.player_id, function(err, player){

        if (err)
          response.send(err);
        response.json(player);

      });
    })


  .put(function(request, response){
    Player.findById(request.params.player_id, function(err, player){

      if (err)
        response.send(err);
      player.name = request.body.name,
      player.rank = request.body.rankname ? request.body.rank : player.rank

        player.save(function(err) {
          if (err)
            response.send(err);
          response.json({ message: 'Player updated!'});
        });
    });
  })


  router.route('/players/:player_id')
    .delete(function(request, response){
      Player.remove({
        _id: request.params.player_id
      }, function(err, player){

        if (err)
          response.send(err);
      Player.find(function(err, players) {
        if (err)
          response.send(err)
        response.json(players);
      });
      });
    })



}

module.exports = routes;
