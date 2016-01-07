(function(){
    angular
    .module('myApp')
    .controller('GenericFormController', ['GenericFormService', 'ConnectService', '$location','$scope', 'DynamicStaticDataService', '$rootScope',
    GenericFormController
]);

function GenericFormController(GenericFormService, ConnectService, $location, $scope, DynamicStaticDataService, $rootScope) {


    if (typeof sessionStorage.sessionid == 'undefined') {
        $location.path('/login');
    }

    // if (!DynamicStaticDataService.vendorsloaded()) {
    //     DynamicStaticDataService.getvendors();
    // }
    // $('.selectpicker').selectpicker();
    // angular.element("#selectpicker").selectpicker();
    // angular.element("#selectpicker").selectpicker({style: 'btn-info', size: 4});
    // angular.element("#selectpicker").css( "border", "30px solid red" );
    var vm = this;
    // Parse.initialize("2hfBankfC8qbJIwUBR6DVbUGD1k0beYz7zU5ZUcg", "aQf4UU4XweAw2i9HDV0WGGX0C1KHgjslGf6hra1Y");
    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}).then(function(object) {
    //   alert("yay! it worked");
    // });

    console.log('I am the generic form controller')
    vm.gfc = true;
    vm.taskchosen = false;
    vm.showinputs = false;
    vm.showdashboard = false;
    vm.showback = true;
    var path = $location.path().slice(1);
    vm.title = path.charAt(0).toUpperCase() + path.slice(1);
    // vm.taskfields = GenericFormService.taskfields(path);
    vm.taskfields = GenericFormService.taskfields(path);
    vm.taskmodel = GenericFormService.taskmodel(path);
    // There has to be a detail view.
    // No more putting way too much info in the table
    // vm.myData = [10,20,30,40,60];

    //vm.tests = ['test1','test2','test3'];
    // load sync_functions for path
    // somehow make this available inside the field.data.service isolated controller...
    // this data needs to be persisted somehow

   // vm.refreshSlider = function () {
   //     $timeout(function () {
   //         $scope.$broadcast('rzSliderForceRender');
   //     });
   // };

    
    vm.cleardataviews = function () {
        vm.show_view_manifest_table= false;
        vm.show_view_transfer_table = false;
        vm.show_view_inventory_item = false;
        // vm.show_view_plants_table = false;
    }
    vm.back = function () {
        vm.cleardataviews();
        $location.path('/traceability');
    }
    //  vm.title = path;
    vm.cancel = function () {
        console.log('cancel!');
        vm.cleardataviews();
        vm.showinputs = false;
        vm.formmodel = {};
        vm.formfields = {};
        vm.taskinfo = {};
        vm.taskfields = GenericFormService.taskfields(path);
        // vm.taskinfo = vm.taskfields.info;
        vm.taskmodel = GenericFormService.taskmodel(path);
    }

    vm.ontask = function () {
        vm.taskchosen = true;
        console.log('choose task');
        vm.showinputs = true;
        vm.formmodel = GenericFormService.formmodel(vm.taskmodel.task);
        vm.formfields = GenericFormService.formfields(vm.taskmodel.task);
        console.log('formfields');
        console.log(vm.formfields);
        vm.taskinfo = GenericFormService.taskinfo(vm.taskmodel.task);
        vm.cleardataviews();
        if (
            vm.taskmodel.task === 'batch_inventory_adjust' ||
            vm.taskmodel.task === 'view_inventory' ||
            vm.taskmodel.task === 'plant_view'
        ) {
            vm.hidego = true;
        }

    }
    // vm.mysubmit = function ($event) {
    //     console.log('submit request!');
    //     console.log($event);
    //     GenericFormService.handlerequest($event, vm.formmodel, vm.taskmodel);
    //     // handlesubmit(vm.formmodel.action)
    //     // TODO: formatrequest(vm.formmodel)
    //
    // }

    vm.onsubmit = function ($event) {
        console.log('submit request!');
        console.log($event);
        // handlesubmit(vm.formmodel.action)
        // TODO: formatrequest(vm.formmodel)
        // if (vm.taskmodel.)
        if (vm.formmodel.action === "manifest_view") {
            // vm.showmanifest = true;
            vm.manifests = vm.formmodel.manifests;
            console.log(vm.manifests);
            vm.show_view_manifest_table = true;
            return;
        }
        if (vm.formmodel.action === "transfers_view_inbound") {
            // vm.showtransfer = true;
            vm.show_view_manifest_table = true;
            vm.transfer = vm.formmodel.transfer;
            return;
        }
        if (vm.formmodel.action === "inventory_manifest") {
            // vm.formmodel.stop_overview.vendor_license = vm.formmodel.stop_overview.vendor_license.license;
            vm.formmodel.stop_overview.approximate_departure = Date.parse(vm.formmodel.stop_overview.approximate_departure)
            vm.formmodel.stop_overview.approximate_arrival = Date.parse(vm.formmodel.stop_overview.approximate_arrival)
            vm.formmodel.stop_overview.stopnumber = 1;

        }if (vm.formmodel.action === "batch_inventory_adjust") {
            // vm.show_view_inventory_item = true;
            vm.show_batch_adjust = true;
            return;
        }
        if (vm.formmodel.action === "view_inventory") {
            vm.show_view_inventory_item = true;
            vm.show_view_inventory = true;
            return;
        }
        if (vm.taskmodel.task === "waste_destroy_schedule" || vm.formmodel.action === 'schedule_zeros_for_destruction') {
            vm.formmodel.reason_extended = 1;
            vm.formmodel.action = "inventory_destroy_schedule";
            vm.formmodel.override = 1;

            // vm.formandtaskmodel = {}
            // vm.formandtaskmodel.formmodel = vm.formmodel;
            // vm.formandtaskmodel.taskmodel = vm.taskmodel;
            // // GenericFormService.showconfirmationdialog($event, vm.formandtaskmodel);
            // return;
        }
        if (vm.formmodel.action === "waste_destroy") {
            vm.formmodel.reason_extended = 1;
            vm.formmodel.action = "inventory_destroy";
        }
        if (vm.taskmodel.task === "inventory_convert") {
            // vm.formmodel.reason_extended = 1;
            // vm.formmodel.action = "inventory_destroy";
            vm.formmodel.data.barcodeid = vm.formmodel.inventoryitem.id
            vm.formmodel.no_modification = 1
            vm.formmodel.inventoryitem = ''
        }
        if (vm.taskmodel.task === "plant_new") {
            vm.formmodel.location = $rootScope.mylocation
        }
        GenericFormService.showconfirmationdialog($event, vm.formmodel, vm.cancel);
    }

    vm.toprint = function () {
        // you can use: $window.open(url, windowName, attributes);
        $window.open('/print');

    }
    //  vm.view = GenericFormService.view(path)
}

})();
