
angular
.module('myApp')
.factory('Data', [
    Data
]);

function Data() {
    var formatted = {}
    var reload = true
    var demo = false
    var raw = {}
    console.log('MAC');
    function loadDemoData() {
        // formatted =
        console.log('loadDemoData');
    }

    return {
        demo: demo,
        loadDemoData: loadDemoData,
        raw: raw,
        formatted: formatted,
        tablesum: {},
        reload: reload,
        mylocation : '',
        // demoData: demoData
    }
}
