
angular
.module('myApp')
.factory('Market', [ '$http', '$q',
    Market
]);

function Market($http, $q) {
    console.log('Market exists');
    // var Market = {}
    function savePost(post) {
        console.log(post);
        return $http({
            method: 'POST',
            // url: 'php/action.php',
            data: { user: JSON.parse(sessionStorage.user), request: post },
            url: 'php/markte_w.php',
            datatype: 'json',
        })
    }
    function format(res) {
        // sortbykey(res, 'time')
        // res.map(function(row){
        //     Market.raw.MarketByTime[row.time] = row
        // })
        // if (!res) return console.log('Erorr Getting Market')
        // formatted = res.map(function(historicalAction){
        //     var req = JSON.parse(historicalAction.req)
        //     // console.log(historicalAction);
        //     // console.log(historicalAction.res);
        //     // console.log(JSON.parse(historicalAction.res));
        //     // console.log(req);
        //     // if (JSON.parse(historicalAction.res).success) console.log(JSON.parse(historicalAction.res));
        //     // return req
        //     // var req = JSON.parse(historicalAction.req)
        //     var res = JSON.parse(historicalAction.res)
        //     var time = JSON.parse(historicalAction.time)
        //     var email = JSON.parse(historicalAction.email)
        //     return { req: req, res:res, time:time, email:email }
        // })
        // sortbykey(formatted, 'time')
        return formatted
    }

    function load() {
        // var defer = $q.defer()
        return $http({
            method: 'POST',
            // url: 'php/action.php',
            data: { user: JSON.parse(sessionStorage.user), request: '' },
            url: 'php/markte_r.php',
            datatype: 'json',
        })
        // .success(function (res) {
        //     // // Market = JSON.parse(res)
        //     // raw = res
        //     // formatted = formatMarket(res)
        //     // return defer.resolve()
        //     // console.log(Market);
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
        savePost: savePost,
        load: load,
        // Market: Market,
    }
}
