(function(){
    angular
    .module('myApp')
    .controller('BrowsePlantsController', ['$location','DynamicStaticDataService','NgTableParams',
    BrowsePlantsController
])

function BrowsePlantsController($location, DynamicStaticDataService, NgTableParams) {
    var vm = this;
    console.log('browse plants');
    var data = [{name: "Moroni", age: 50} /*,*/];
    vm.tableParams = new NgTableParams({}, { dataset: data});
}

})();
