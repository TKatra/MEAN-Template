(function() {
  'use strict';

  angular
  .module('main')
  .controller('mainController', MainController);

  function MainController() {
    var vm = this;
    vm.tagline = 'To the moon and back!';
  }
})();