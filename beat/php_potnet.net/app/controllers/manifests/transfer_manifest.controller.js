(function(){
    angular
    .module('myApp')
    .controller('TransferManifestController', ['$location', '$rootScope', '$scope','DynamicStaticDataService',
    TransferManifestController
])



function TransferManifestController($location, $rootScope, $scope, DynamicStaticDataService) {
    var vm = this;

    if (sessionStorage.sessionid === "undefined" || typeof sessionStorage.sessionid === "undefined") {
        console.log("sessionStorage is undefined");
        $location.path('/login');
    }
    console.log('TRANSFER MANIFEST CONTROLLER');
    // DynamicStaticDataService.refresh(['vendor','manifest', 'inventory_transfer'])
    // console.log($rootScope.manifests);
    // var untransferred = $scope.manifests.filter( function(manifest) {
    //     return !manifest.stops
    // })

};

})();
