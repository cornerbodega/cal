(function(){
  angular
    .module('myApp')
    .controller('PrintController', ['$location',
      PrintController
    ])

  function PrintController($location) {
    var vm = this;
    // console.log($rootScope.id_to_print);
    // vm.id = $rootScope.id_to_print
    // console.log($location.path().lastIndexOf('/') + 1));
    // vm.id = $location.path().lastIndexOf('/') + 1;
    console.log($location.path().split('/'));
    vm.id = $location.path().split('/')[2]
    vm.desc = $location.path().split('/')[3]
    vm.date = $location.path().split('/')[4]
  };

})();
