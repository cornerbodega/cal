(function(){
  angular
    .module('myApp')
    .controller('LandingController', ['$location',
      LandingController
    ]);

  function LandingController($location) {
    var vm = this;
    console.log('Landing please!')
    vm.login = function(){
        $location.path('/login')
    }
  }

})();
