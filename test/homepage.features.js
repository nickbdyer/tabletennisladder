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
      'input[value="add-player"]'.should.be.inDOM.and.be.visible;
      expect("body").to.contain.text("Table Tennis Lads");
    });
  });

  it('When a player exists in the db, its name is shown', function() {
    casper.then(function(){
      'form[action="/"]'.should.be.inDOM.and.be.visible
      'input[name="name"]'.should.be.inDOM.and.be.visible
      this.fill('form[action="/"]',{
        name: 'Rich'
      }, true);
      this.click('input[value="add-player"]')
      });
    casper.then(function(){
      expect("body").to.contain.text("Rich");
      expect("body").not.to.contain.text("There are no players");
    });
  });

});
