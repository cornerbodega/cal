
angular
.module('myApp')
.factory('GenericFormService', GenericFormService );

function GenericFormService($location, ConnectService, $http, TaskService, FormDataService, $mdDialog, $route, DynamicStaticDataService,Data) {
    // var vm = this;
    console.log('generic form service!');
    // var vm = $scope
    // load view
    // function silentsuccess (res) {
    //     console.log('silent success');
    //     console.log(res);
    // }
    // function silentfail (res) {
    //     console.log('silent fail');
    //     console.log(res);
    // }
    var successfunction = {};
    // function reformatrequest (task, model) {
    //     if (task === 'schedule_zeros_for_destruction') {
    //         // model.barcodeid.map (function (id) {
    //         //     ConnectService.post({
    //         //         action:'inventory_destroy_schedule',
    //         //         barcodeid: [id],
    //         //         reason: "Scheduling empty lot for destruction",
    //         //         reason_extended: 0,
    //         //     }, silentfail, silentsuccess);
    //         // })
    //
    //     }
    //     return {model: model, sendrequest: true}
    // }
    function closedialog () {
        $mdDialog.hide();
        $route.reload();
    }
    // function toinventory (cb) {
    //     $mdDialog.hide();
    //     console.log('toinventory!!');
    //     $scope.vm.cancel
    //     // $location.path('/inventory')
    // }
    function showwarningdialog ($event, warning) {
        var parentelement = angular.element(document.body);

        $mdDialog.show({
                parent: parentelement,
                targetEvent: $event,
                locals: {
                    inputmodel:  warning
                },
                template:  '<md-dialog aria-label="List dialog">' +
                           '  <md-dialog-content>'+
                           '    <h4>Warning:</h4> '+
                        //    getconfirmation(data) +
                            warning +
                           '    <md-button ng-click="confirm.cancel()" class="md-warn">' +
                           '      Cancel' +
                           '    </md-button>' +
                           '  </md-dialog-content>' +
                           '</md-dialog>',
                controller: DialogController
        }); // end show
    }
    function formmodel (task) {
        //  var task = path.slice(1);
        return {
            action : task
        }
    }

    function taskmodel (path) {
        //  var task = path.slice(1);
        return {
            path : path
        }
    }
    function execute(data) {
        console.log('execute!!');
        console.log(data);
        // I want to show a confirmation alert,
        // Then, if confirmed, execute, then show another alert
        // based on success or failure


        console.log(data);
        // console.log(vm);

        // showAlert(data);
        ConnectService.post(data, f, s);
    }

    function getconfirmation (task) {
        return ConfirmationService.getconfirmation(task);
    }

    function showconfirmationdialog ($event, data, success) {
        successfunction = success;
        showdialog($event, data);
    }
    function showdialog ($event, data) { // TODO: put this in its own service
        var parentelement = angular.element(document.body);
        console.log('data');
        console.log(data);
        $mdDialog.show({
                parent: parentelement,
                targetEvent: $event,
                // scope: $scope,
                template:  '<md-dialog aria-label="List dialog">' +
                           '  <md-dialog-content>'+
                           '    <h4>Confirm:</h4><h5> '+
                        //    getconfirmation(data) +
                           '  The WSCLB Traceability System will receive the following update:</h5>'  +
                           ' <pre>{{inputmodel | json}}</pre>' +
                           '  </md-dialog-content>' +
                           '  <div class="md-tasks">' +
                           '    <md-button ng-click="confirm.submit()" class="md-primary">' +
                           '      Confirm' +
                           '    </md-button>' +
                           '    <md-button ng-click="confirm.cancel()" class="md-warn">' +
                           '      Cancel' +
                           '    </md-button>' +
                           '  </div></md-dialog-content>' +
                           '</md-dialog>',
                locals: {
                    inputmodel:  data
                },
                controller: DialogController
        }); // end show
    }
    function DialogController (scope, $mdDialog, inputmodel) {
        // scope.myinputmodel = data;

        // console.glog(items);
        // scope.inputmodel = inputmodel.formmodel;
        // scope.taskmodel = inputmodel.taskmodel;
        scope.inputmodel = inputmodel;
        console.log(scope);
        console.log(scope.inputmodel);
        scope.confirm = {}
        scope.confirm.cancel = function () {

            $mdDialog.hide();
        }
        scope.confirm.submit = function () {
            // if (scope.taskmodel.task = "schedule_zeros_for_destruction") {
        //    reformattedrequest = reformatrequest(scope.taskmodel.task, scope.inputmodel)
            // }
        //    if (reformattedrequest.sendrequest) {
            execute(scope.inputmodel);
            $mdDialog.hide();
        }

    }

    function s (res) {
        console.log("Enormous Success! " + res);
        Data.reload = true
        DynamicStaticDataService.refreshPromise()
        DynamicStaticDataService.refreshAll()

        var parentelement = angular.element(document.body);
        console.log(res);
        $mdDialog.show({
                parent: parentelement,
                //targetEvent: $event,
                // scope: $scope,
                template:  '<md-dialog aria-label="List dialog">' +
                           '  <md-dialog-content>'+
                           '    <h4>Success!</h4><h5>WSCLB Traceability Says:</h5>' +
                '<pre>{{res | json}}</pre>' +
                ' <md-button ng-click="ok()" class="md-primary">' +
                ' Ok' +
                ' </md-button></md-dialog-content></md-dialog>',
                locals: {
                    result:  res
                },
                controller: SuccessController,
                clickOutsideToClose:true
        }); // end show
        function SuccessController (scope, $mdDialog, result) {
            // scope.myinputmodel = data;
            scope.res = result
            // console.glog(items);
            scope.ok = function () {
                // $location.path('/traceability');

                // successfunction();
                $mdDialog.hide();
            }
        }
    }

    function f (res) {
        console.log("Error! + " + res.error);
        alert = $mdDialog.alert({
            title: 'Error',
            content: res.error,
            ok: 'Close',
            clickOutsideToClose:true
        });
        $mdDialog
        .show( alert )
        .finally(function() {
            alert = undefined;
        });
    }

    // get form needed for task
    function formfields (task) { // plugs in to formly
        console.log('get input fields for ' + task);
        return FormDataService.getform(task);
    }


    // function ontask () {
    //   console.log('form.service.ontask');
    // }
    function taskfields (task) {
        return TaskService.taskfields(task);
    }
    function taskinfo (task) {
        return TaskService.taskinfo(task);
    }

    return {
        // title: "Log In",
        // desc: "Please enter your WSLCB Traceability login information",
        formmodel: formmodel,
        formfields: formfields,
        taskfields: taskfields,
        taskmodel: taskmodel,
        taskinfo: taskinfo,

        f: f,
        s: s,
        execute: execute,
        showconfirmationdialog: showconfirmationdialog,
        showwarningdialog: showwarningdialog,
        closedialog:closedialog,

    }
}
