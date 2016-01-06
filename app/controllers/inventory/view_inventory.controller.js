(function(){
  angular
    .module('myApp')
    .controller('ViewInventoryController', ['$location', '$rootScope', '$scope', 'DynamicStaticDataService',
      ViewInventoryController
    ])

  // This Controller will allow the user to navigate between functions
  // (sub/other controllers)

  // String.prototype.capitalize = function() {
  //   return this.charAt(0).toUpperCase() + this.slice(1);
  // }

  function ViewInventoryController($location, $rootScope, $scope, DynamicStaticDataService) {
    var vm = this;
    // DynamicStaticDataService.refresh(['inventory'])
    if (sessionStorage.sessionid === "undefined" || typeof sessionStorage.sessionid === "undefined") {
      console.log("sessionStorage is undefined");
      $location.path('/login');
    }
    $scope.mytypes = JSON.parse(localStorage.getItem('mytypes'))
    // console.log(localStorage.getItem('inventory'));
    // console.log('view inventory controller!');
    // $scope.inventorybytype = JSON.parse(localStorage.getItem('inventorybytype'))
    $scope.inventorybytype = JSON.parse(localStorage.getItem('inventorybytype'))
    $scope.inventory = JSON.parse(localStorage.getItem('inventory'))
    console.log($scope.inventory);
    // console.log($scope.inventory);
    console.log($scope.inventorybytype);
    // console.log(localStorage);
    // $scope.inventory = DynamicStaticDataService.mydata.inventory

    // console.log(DynamicStaticDataService.mydata);

    // $scope.addPotato = function (){
    //     console.log('add!');
    //     DynamicStaticDataService.addPotato()
    // }
    // $scope.potatoes = DynamicStaticDataService.potatoes
    // empty ass shit on reload.....
    // i need a fucking data service.
    // i can either host it or not.
    // i should probably host it.
    // nah fuck that - let's see if i can use a service? can services hold data in memory?
    // console.log($scope.inventory);
    // $scope.viewfields = $scope.inventory[0].viewfields
//            console.log($scope.viewfields)
//            $scope.vflen = $scope.viewfields.length


    // $scope.searchchanged = function () {
    //     // $scope.inventory = $filter('filter')($scope.inventory, $scope.search)
    // }
    // $scope.mytypes = $rootScope.mytypes
    // console.log($scope.mytypes);
    $scope.searching = function () {
        $scope.mytypes.map (function (t) {
            t.showtype = true
        })
    }
    $scope.toggleshowtype = function (type) {
        if (typeof type.showtype === 'undefined') {
            type.showtype = true
            console.log('woah!!');
            return
        }
        console.log('item.showdetail');
        type.showtype = !type.showtype
    }

    $scope.toggledetail = function (item) {
        if (typeof item.showdetail === 'undefined') {
            item.showdetail = true
            // item.expand = 3
            return
        }
        console.log('item.showdetail');
        item.showdetail = !item.showdetail
    }

    // console.log(vm.title);
    // vm.formmodel = {};
    // vm.formmodel.sessionid = sessionStorage.sessionid;
    // vm.formfields = ViewInventoryService.fields();
    // console.log(vm.fields);
    // vm.onsubmit = function () {
    //     // ViewInventoryService.execute(vm.formmodel);
    //     // console.log('subm');
    // }
  };

})();
