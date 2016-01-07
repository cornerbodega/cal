(function(){
    angular
    .module('myApp')
    .controller('ViewManifestsController', ['$location', '$rootScope', '$scope','DynamicStaticDataService',
    ViewManifestsController
])



function ViewManifestsController($location, $rootScope, $scope, DynamicStaticDataService) {
    var vm = this;

    if (sessionStorage.sessionid === "undefined" || typeof sessionStorage.sessionid === "undefined") {
        console.log("sessionStorage is undefined");
        $location.path('/login');
    }
    // DynamicStaticDataService.refresh(['vendor','manifest', 'inventory_transfer'])
    // $scope.manifests = JSON.parse(sessionStorage.manifests)
    $scope.manifests = JSON.parse(localStorage.getItem('manifests'))
    console.log($scope.manifests);
    console.log(localStorage);

    // $scope.manifests = JSON.parse(sessionStorage.manifests)
    // console.log(sessionStorage.manifests);
    //console.log($rootScope.manifests);
    // $scope.manifests = DynamicStaticDataService.mydata.manifest
    // console.log($scope.manifests);

};

})();
