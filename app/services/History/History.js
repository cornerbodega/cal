
angular
.module('myApp')
.factory('History', [ '$http', '$q',
    History
]);

function History($http, $q) {
    console.log('History exists');
    // var history = {}
    var raw = []
    var formatted = []
    function format(res) {
        // sortbykey(res, 'time')
        // res.map(function(row){
        //     history.raw.historyByTime[row.time] = row
        // })
        if (!res) return console.log('Erorr Getting History')
        formatted = res.map(function(historicalAction){
            var req = JSON.parse(historicalAction.req)
            // console.log(historicalAction);
            // console.log(historicalAction.res);
            // console.log(JSON.parse(historicalAction.res));
            // console.log(req);
            // if (JSON.parse(historicalAction.res).success) console.log(JSON.parse(historicalAction.res));
            // return req
            // var req = JSON.parse(historicalAction.req)
            var res = JSON.parse(historicalAction.res)
            var time = JSON.parse(historicalAction.time)
            var email = JSON.parse(historicalAction.email)
            return { req: req, res:res, time:time, email:email }
        })
        sortbykey(formatted, 'time')
        return formatted
    }

    function load() {
        // var defer = $q.defer()
        return $http({
            method: 'POST',
            // url: 'php/action.php',
            data: { user: JSON.parse(sessionStorage.user), request: '' },
            url: 'php/GetHistory.php',
            datatype: 'json',
        })
        // .success(function (res) {
        //     // // history = JSON.parse(res)
        //     // raw = res
        //     // formatted = formatHistory(res)
        //     // return defer.resolve()
        //     // console.log(history);
        // })
        // return defer.promise
    }
    function sortbykey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
    }
    return {
        format: format,
        formatted: formatted,
        load: load,
        // history: history,
    }
}
