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
      'button[value="Add Player"]'.should.be.inDOM.and.be.visible;
    });
  });

  it('When a player exists in the db, its name is shown', function() {
    casper.then(function(){
      'form[id="addplayer"]'.should.be.inDOM.and.be.visible
      'input[name="name"]'.should.be.inDOM.and.be.visible
      this.fill('form[id="addplayer"]',{
        name: 'Rich'
      }, true);
      this.click('button[value="Add Player"]')
      });
    casper.thenOpen('http://localhost:3000/', function(){
      expect("body").to.contain.text("Rich");
      'noplayers'.should.be.inDOM.and.not.be.visible;
    });
  });

});
