//
// angular
// .module('myApp')
// .factory('VendorsService', ['$location', 'ConnectService', '$rootScope', '$http',
// VendorsService
// ])
// // .factory('VendorsPrepService',['VendorsService'], VendorsPrepService);
//
//
// function VendorsService($location, ConnectService, $rootScope, $http) {
//     function loadvendors (action) {
//         var data = {action:action, sessionid: sessionStorage.sessionid, API: '4.0'};
//         console.log('resolve?');
//         return $http({
//             method: 'POST',
//             // url: 'app/php/action.php',
//             url: 'php/action.php',
//             data: data,
//             datatype: 'json',
//         }).success( function (res) {
//             if (res.success != 1) return f(res)
//             $rootScope[action] = ResponseFormatter.formatresponse(action, res)
//         })
//     }
//     function f (res) {
//         console.log('Error!');
//         console.log(res);
//     }
//     return {
//         // getvendors: getvendors,
//         loadvendors: loadvendors,
//     }
// }
