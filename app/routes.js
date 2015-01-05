var Player = require('./models/Player');
var routes = function(app) {

  app.get('*', function(request, response){
    response.sendfile('./public/index.html')
  });

  app.post('/', function(request, response){
    var player = new Player();
    player.name = request.body.name
    player.save(function(err) {
      if (err) {
        response.send(err)
      }
      console.log("player created")
    })
    Player.find(function (err, players) {
      if(err) return next(err);
    });
    response.render("index.ejs", {playerlist: players});
  });

}

module.exports = routes;