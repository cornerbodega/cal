
angular
.module('myApp')
.factory('CallLcbApiService', ['$location', 'ConnectService', '$rootScope', '$http', 'ResponseFormatter',
CallLcbApiService
])
// .factory('CallLcbApiPrepService',['CallLcbApiService'], CallLcbApiPrepService);


function CallLcbApiService($location, ConnectService, $rootScope, $http, ResponseFormatter) {
    function calllcbapi (action) {
        var data = {action:action, sessionid: sessionStorage.sessionid, API: '4.0'};
        console.log('resolve!' + action);
        return $http({
            method: 'POST',
            // url: 'app/php/action.php',
            url: 'php/action.php',
            data: data,
            datatype: 'json',
        }).success(function (res) {
            if (res.success != 1) { return console.error(res.error)}
            //$rootScope[action] = ResponseFormatter.formatresponse(action, res)
            ResponseFormatter.formatresponse(action, res)
        })

    }
    function f (res) {
        console.log('Error!');
        console.log(res);
    }
    return {
        // getCallLcbApi: getCallLcbApi,
        calllcbapi: calllcbapi,
    }
}
