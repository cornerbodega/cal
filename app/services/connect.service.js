(function () {
    angular
    .module('myApp')
    .factory('ConnectService', [
        '$http', '$location', 'Data',
        ConnectService
    ]);

    function ConnectService($http, $location, Data) {
        // function fail (res) {
        //     console.log("+ " + res.error);
        //     alert = $mdDialog.alert({
        //         title: 'Error! WSLCB Traceability says: ',
        //         content: res.error,
        //         ok: 'Close'
        //     });
        //     $mdDialog
        //     .show( alert )
        //     .finally(function() {
        //         alert = undefined;
        //         console.log(res.error);
        //         if (res.error == "Your session has expired.") {
        //             console.log('res.error!!!');
        //             $location.path('/login');
        //         }
        //     });
        }
        function getFromBrsPos(sync_check_request) {

            //
            // return $http({
            //     method: 'POST',
            //     // url: 'php/action.php',
            //     url: 'php/get_from_brs_pos.php',
            //     data: { user: JSON.parse(sessionStorage.user), request: sync_check_request },
            //     // data: data,
            //     datatype: 'json',
            // }).success(function (res) {
            //     // console.log(res);
            //     console.log('got items from brs_pos');
            //     // update_brs_pos()
            //
            //     console.log(res);
            // })
        }
        function updateBrsPos() {
            // tables_to_sync = [
            //     'vehicle',
            //     'employee',
            //     'plant_room',
            //     'inventory_room',
            //     'inventory',
            //     'plant',
            //     'plant_derivative',
            //     'manifest',
            //     'inventory_transfer',
            //     'inventory_transfer_inbound',
            //     'sale',
            //     'tax_report',
            //     'vendor',
            //     'qa_lab',
            //     'inventory_adjust',
            //     'inventory_qa_sample',
            //     'inventory_sample',
            // ];
            // var sync_check_request = {
            //     "API": "4.0",
            //     "action": "sync_check",
            //     "data": [],
            //     "download": 1,
            //     "active": 1,
            //     "sessionid": sessionStorage.sessionid
            // }
            // tables_to_sync.map( function( table ) {
            //     sync_check_request.data.push({table: table, active: 1})
            // })
            //
            // $http({
            //     method: 'POST',
            //     // url: 'php/action.php',
            //     url: 'php/update_brs_pos.php',
            //     data: { user: JSON.parse(sessionStorage.user), request: sync_check_request },
            //     // data: data,
            //     datatype: 'json',
            // }).success(function (res) {
            //     // console.log(res);
            //     console.log('brs_pos updated successfully!');
            //     Data.loaded = true;
            // })
        }
        function post(data, fCallback, sCallback) {
            // if (typeof sessionStorage.sessionid == 'undefined') {
            //     console.log("NO SESSION!");
            //     $location.path('/login');
            // }
            // if (typeof sessionStorage.sessionid != 'undefined') {
            //     data.sessionid = sessionStorage.sessionid;
            //     console.log(data);
            // }
            //
            // data["API"] = "4.0";
            // // console.log('request:');
            // // console.log(JSON.stringify(data));
            // // console.log({ user: JSON.parse(sessionStorage.user), request: data });
            // $http({
            //     method: 'POST',
            //     // url: 'php/action.php',
            //     url: 'php/potnetdb.php',
            //     data: { user: JSON.parse(sessionStorage.user), request: data },
            //     // data: data,
            //     datatype: 'json',
            // }).success(function (res) {
            //     if (res.success == 1) {
            //         sCallback(res);
            //         console.log('response:');
            //         console.log(res);
            //         // send a sync_check request and get all that data
            //         // into brs_pos!
            //         // WORKS - SAVE POS INFO TO MYSQL DB
            //     } else {
            //         fCallback(res);
            //     };
            // });
        }
        // function saveForDemo(formatted) {
        //     console.log(JSON.stringify(formatted));
        //     $http({
        //         method: 'POST',
        //         // url: 'php/action.php',
        //         url: 'php/demo_w.php',
        //         data: { user: JSON.parse(sessionStorage.user), request: JSON.stringify(formatted) },
        //         // data: data,
        //         datatype: 'json',
        //     }).success(function (res) {
        //         // console.log(res);
        //         console.log('demo updated successfully!');
        //         Data.loaded = true;
        //     })
        // }
        return {
            fail: fail,
            // potnetpost: potnetpost,
            updateBrsPos: updateBrsPos,
            getFromBrsPos: getFromBrsPos,
            post: post,
            // saveForDemo: saveForDemo
        }
    }
})();
