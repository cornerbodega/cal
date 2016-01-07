(function(){
    angular
    .module('myApp')
    .controller('VendorsController', ['Data',
    VendorsController
])

function VendorsController(Data) {
    var vm = this;
    console.log('qa labs');
    vm.vendors = Data.formatted.vendors.vendorsarray
}

})();
