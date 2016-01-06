(function () {
    angular
    .module('myApp')
    .factory('ConnectService', [
        '$http', '$location', 'Data',
        ConnectService
    ]);

    function ConnectService($http, $location, Data) {

        return {
        }
    }
})();
