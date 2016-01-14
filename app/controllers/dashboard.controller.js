(function(){
  angular
    .module('myApp')
    .controller('DashboardController', ['DynamicStaticDataService','DashboardService', '$location',
      DashboardController
    ])

  // This Controller will allow the user to navigate between functions
  // (sub/other controllers)

  // String.prototype.capitalize = function() {
  //   return this.charAt(0).toUpperCase() + this.slice(1);
  // }

  function DashboardController(DynamicStaticDataService, DashboardService, $location) {
    var vm = this;
    // if (!DynamicStaticDataService.vendorsloaded()) {
    //     DynamicStaticDataService.getvendors();
    // }
    // vm.showinputs = true;
    if (sessionStorage.sessionid === "undefined" || typeof sessionStorage.sessionid === "undefined") {
      console.log("sessionStorage is undefined");
      $location.path('/login');
    }
    var path = $location.path().slice(1);
    vm.title = path.charAt(0).toUpperCase() + path.slice(1);
    // console.log(vm.title);
    vm.formmodel = {};
    vm.formmodel.sessionid = sessionStorage.sessionid;
    vm.formfields = DashboardService.fields();


    // console.log(vm.fields);
    vm.onsubmit = function () {
        //DashboardService.execute(vm.formmodel);
    }
  };

})();
