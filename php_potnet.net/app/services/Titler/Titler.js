
angular
.module('myApp')
.factory('Titler', [ '$location',
    Titler
]);

function Titler($location) {
    var title = ''
    return {
        title: title
    }
}
