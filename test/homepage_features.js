var Player = require('../lib/models/Player');

describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('When there are no players', function(){
    casper.then(function(){
      expect("body").to.contain.text("There are no players");
    });
  });

  it('When there are no players a player can be added', function(){
    casper.then(function(){
      'a'.should.be.inDOM.and.be.visible;
      expect("body").to.contain.text("Table Tennis Lads");
    });
  });

  it('When a player exists in the db, its name is shown', function() {
    var rich = new Player({name: "Rich"});
      casper.then(function(){
        console.log(rich.name)
        expect("body").to.contain.text("Rich")
        expect("body").not.to.contain.text("There are no players")
      });
  });

});
