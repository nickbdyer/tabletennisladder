var Player = require('./models/Player');
var routes = function(app, router) {

  app.get('/', function(request, response){
    response.sendFile('./public/index.html')
  });

  router.route('/players')

    .get(function(request, response) {
      Player.find(function(err, players) {
        if (err)
          response.send(err)
        response.json(players);
      });
    })

    .post(function(request, response){
      Player.create({
        name : request.body.name,
        rank : 12
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

}

module.exports = routes;