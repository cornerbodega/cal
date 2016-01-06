(function(){
    angular
    .module('myApp')
    .controller('QALabController', ['$location','Data',
    QALabController
])

function QALabController($location, Data) {
    var vm = this;
    console.log('qa labs');
    vm.labs = Data.formatted.qa_lab
}

})();
