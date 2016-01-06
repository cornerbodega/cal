
angular
.module('myApp')
.factory('Data', [
    Data
]);

function Data() {
    var formatted = {}
    var reload = true
    function loadDemoData() {
        // formatted =
        console.log('loadDemoData');
    }
    return {
        demo: false,
        loadDemoData: loadDemoData,
        raw: {},
        formatted: formatted,
        tablesum: {},
        reload: reload,
        mylocation : ''
    }
}
