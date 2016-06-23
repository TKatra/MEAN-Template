(function() {
  'use strict';

  angular
  .module('main')
  .controller('nerdController', NerdController);

  NerdController.$inject = ['nerds', 'nerdService'];

  function NerdController(nerds, nerdService) {
    var vm = this;
    vm.nerds = nerds;
    vm.tagline = 'Nothing beats a pocket protector!';
    
    vm.addNerd = addNerd;
    vm.updateNerd = updateNerd;
    vm.removeNerd = removeNerd;

    function addNerd() {
      if (vm.nerdName) {
        nerdService.create({ name: vm.nerdName })
          .then(function(data) {
            vm.nerdName = '';
            updateNerdList();
          });
      }
    }

    function removeNerd() {
      nerdService.delete(vm.nerdToRemove._id)
        .then(function() {
          vm.nerdToRemove = '';
          updateNerdList();
        });
    }

    function updateNerd() {
      var updateData = {
        _id: vm.nerdToUpdate._id,
        name: vm.nerdUpdateName
      };
      nerdService.update(updateData)
        .then(function(data) {
          vm.nerdToUpdate = '';
          vm.nerdUpdateName = '';
          updateNerdList();
        });
    }

    function updateNerdList() {
      nerdService.get()
        .then(function(data) {
          vm.nerds = data.data;
        });
    }
  }
})();