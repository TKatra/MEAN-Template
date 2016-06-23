(function() {
  'use strict';

  angular
  .module('main')
  .factory('nerdService', NerdService);

  NerdService.$inject = ['$http'];

  function NerdService ($http) {
    return {
      get: function() {
        return $http.get('/api/nerds');
      },
      create : function(data) {
        return $http.post('/api/nerds', data);
      },
      update : function(data) {
        return $http.post('/api/nerds/' + data._id, data);
      },
      delete : function(id) {
        return $http.delete('/api/nerds/' + id);
      }
    };
  }
})();