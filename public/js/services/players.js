angular.module("playerService", [])
  .factory('Players', function($http) {
    return {
      get : function() {
        return $http.get('/api/players');
      },
      create : function(playerData) {
        return $http.post('/api/players', playerData);
      },
      delete : function(playerId) {
        return $http.delete('/api/players/' + playerId);
      },
      put : function(playerData, playerId) {
        return $http.put('/api/players/' + playerId, playerData);
      }
    }
  });