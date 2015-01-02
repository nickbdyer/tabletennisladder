describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('When there are no players', function(){
    casper.then(function(){
      expect("body").to.have.text("There are no players");
    });
  });

  it('When there are no players a player can be added', function(){
    casper.then(function(){
      'a'.should.be.inDOM.and.be.visible;
      expect("body").to.have.text("Table Tennis Lads");
    });
  });

});
