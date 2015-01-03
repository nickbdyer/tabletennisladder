describe('TableTennisLadder', function() {
  beforeEach(module('TableTennisLadder'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TableTennisLadderController', {
      $scope: scope
    });
  }));
  
  it('there should be an empty search result and term', function(){
    expect(scope.ttplayers).toBeUndefined();
  });
});
