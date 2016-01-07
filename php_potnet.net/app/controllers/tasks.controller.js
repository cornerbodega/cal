(function(){
    angular
    .module('myApp')
    .controller('TasksController', ['TaskService', '$location','$scope', '$rootScope','DynamicStaticDataService',
    TasksController
]);

function TasksController(TaskService, $location, $scope, $rootScope, DynamicStaticDataService) {

    if (typeof sessionStorage.sessionid == 'undefined') {
        $location.path('/login');
    }
    var vm = this;
    vm.navtitle = $location.path()
    // vm.tasks = TaskService.gettaskoptions($location.path())
    vm.tasks = TaskService.tasks[$location.path()]
    console.log($location.path());
    // if ($location.path() === '/traceability/manifests') {
    //     DynamicStaticDataService.refresh(['manifest', 'inventory_transfer','inventory'])
    // }
    vm.selecttask = function(taskid) {
        // console.log(taskid);
        sessionStorage.currentTask = taskid
        console.log($location.path()+'/'+taskid)
        $location.path($location.path()+'/'+taskid)
    }
    // vm.title = TaskService.title()
    // vm.options = TaskService.options()
}
})();
