'use strict';
angular.module('myApp', [
    'ngRoute',
    'formly',
    'formlyBootstrap',
    'ui.select',
    'ngSanitize',
    'ngAnimate',
    'angular-loading-bar',
    'ngMaterial',
    'rzModule',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'lumx',
])

.config(function($routeProvider) {
    $routeProvider
    // .when('/landing', {
    //     templateUrl: 'views/Landing/Landing.html',
    //     controller: 'LandingController',
    //     controllerAs: 'vm',
    // })
    .when('/traceability/market', {
        templateUrl: 'views/Market/Market.html',
        controller: 'MarketController',
        controllerAs: 'vm',
    })
    .when('/traceability/help', {
        templateUrl: 'views/Help/Help.html',
        controller: 'HelpController',
        controllerAs: 'vm',
    })
    .when('/traceability/sales', {
        templateUrl: 'views/history/History.html',
        controller: 'HistoryController',
        controllerAs: 'vm',
        resolve: { RawHistory: function (History) {
            return History.load()
        }}
    })
    .when('/traceability/tax_report', {
        templateUrl: 'views/history/History.html',
        controller: 'HistoryController',
        controllerAs: 'vm',
        resolve: { RawHistory: function (History) {
            return History.load()
        }}
    })
    .when('/traceability/location', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/inventory/manifests/outbound', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/inventory/manifests/inbound', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/qa_lab', {
        templateUrl: 'views/qa_lab/qa_lab.view.html',
        controller: 'QALabController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/history', {
        templateUrl: 'views/history/History.html',
        controller: 'HistoryController',
        controllerAs: 'vm',
        resolve: { RawHistory: function (History) {
            return History.load()
        }}
    })
    .when('/traceability/plants/plant_move', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_yield_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_convert_to_inventory', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_cure', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_waste_weigh', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_harvest', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_harvest_schedule', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_destroy', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/plant_destroy_schedule', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/inventory_rooms/inventory_room_add', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/inventory_rooms/inventory_room_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/inventory_rooms/inventory_room_remove', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/plant_rooms/plant_room_add', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/plant_rooms/plant_room_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/plant_rooms/plant_room_remove', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/inventory_rooms/browse_inventory_rooms', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/plant_rooms/browse_plant_rooms', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/rooms/inventory_rooms', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/location/rooms/plant_rooms', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/location/rooms', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/plants/plant_new', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants/browse_plants', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/plants', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/inventory/manifests/inbound/inventory_transfer_inbound', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/employees/employee_add', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/employees/employee_remove', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/employees/employee_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/employees/browse_employees', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/vehicles/vehicle_remove', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/vehicles/vehicle_modify', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/vehicles/vehicle_add', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/vehicles/browse_vehicles', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/location/vehicles', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
        // resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
        //     return DynamicStaticDataService.refreshAll()
        // }}
    })
    .when('/traceability/location/employees', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/inventory/manifests', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
    })
    .when('/traceability/inventory/manifests/outbound/inventory_transfer_outbound', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/manifests/outbound/inventory_manifest', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/manifests/outbound/browse_manifests', {
        // templateUrl: 'views/manifests/view-manifests.html',
        // controller: 'ViewManifestsController',
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    // .when('/traceability/inventory/manifests', {
    //     templateUrl: 'views/tasks/tasks.view.html',
    //     controller: 'TasksController',
    //     controllerAs: 'vm',
    // })
    .when('/traceability/inventory', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
        // resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
        //     return DynamicStaticDataService.refresh(['inventory'])
        // }}
    })
    .when('/traceability/inventory/inventory_destroy', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/inventory_convert', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/inventory_destroy_schedule', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/inventory_adjust', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/inventory/view_inventory', {
        // templateUrl: 'views/inventory/view-inventory.html',
        // controller: 'ViewInventoryController',
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            // return DynamicStaticDataService.refresh(['manifest', 'vendor', 'inventory', 'inventory_transfer', 'employee', 'vehicle'])
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability/vendors', {
        templateUrl: 'views/vendors/vendors.view.html',
        controller: 'VendorsController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            // return DynamicStaticDataService.refresh(['manifest', 'vendor', 'inventory', 'inventory_transfer', 'employee', 'vehicle'])
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/samples', {
        templateUrl: 'views/generic.form.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm'
    })
    // .when('/traceability/inventory/manifests/transfers_view_outbound', {
    //     templateUrl: 'views/dashboard/dashboard.view.html',
    //     controller: 'GenericFormController',
    //     controllerAs: 'vm',
    //     resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
    //         return DynamicStaticDataService.refreshAll()
    //         // return DynamicStaticDataService.refresh(['manifest', 'vendor', 'inventory', 'inventory_transfer', 'employee', 'vehicle'])
    //
    //     }}
    // })
    .when('/traceability/inventory/manifests/inbound/transfers_view_inbound', {
        templateUrl: 'views/dashboard/dashboard.view.html',
        controller: 'GenericFormController',
        controllerAs: 'vm',
        resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
            return DynamicStaticDataService.refreshAll()
        }}
    })
    .when('/traceability', {
        templateUrl: 'views/tasks/tasks.view.html',
        controller: 'TasksController',
        controllerAs: 'vm',
        // Works!! But takes a bit to load, and will not refresh automatically on load.
        // Am going to try a lazier approach by loading only relevant tables
        // resolve: { DynamicStaticDataService: function (DynamicStaticDataService) {
        //     return DynamicStaticDataService.refreshall()
        // }}
    })
    .when('/login', {
        templateUrl: 'views/Landing/Landing.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    })
    .when('/print_id/:id/:desc/:date', {
        templateUrl: 'views/print.html',
        controller: 'PrintController',
        controllerAs: 'vm'
    })

    .otherwise({
        redirectTo: '/login'
    });
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyD3As67_F8OYv-xRkaTCEcKOAb1XQLdnf4',
        v: '3.20', //defaults to latest 3.X anyhow
        disableDefaultUI: true,
        libraries: 'weather,geometry,visualization'
    });
})
.run(function(formlyConfig) {
    formlyConfig.setType({
        name: 'new_post_description',
        templateUrl: 'views/field_templates/new_post_description.html',
    });
    formlyConfig.setType({
        name: 'plant_derivatives',
        templateUrl: 'views/plants/plant_derivatives.html',
    });
    formlyConfig.setType({
        name: 'show_qa_labs',
        templateUrl: 'views/qa_lab/show_qa_labs.html',
    });
    formlyConfig.setType({
        name: 'mycheckbox',
        templateUrl: 'views/field_templates/my_checkbox.html',
    });
    formlyConfig.setType({
        name: 'inventory_transfer_inbound_request',
        templateUrl: 'views/field_templates/inventory_transfer_inbound_request.html',
    });
    formlyConfig.setType({
        name: 'inbound_transfer_details',
        templateUrl: 'views/field_templates/inbound_transfer_details.html',
    });
    formlyConfig.setType({
        name: 'manifest_details',
        templateUrl: 'views/field_templates/manifest_details.html',
    });
    formlyConfig.setType({
        name: 'inventory_details',
        templateUrl: 'views/field_templates/inventory_details.html',
    });
    formlyConfig.setType({
        name: 'plants_details',
        templateUrl: 'views/field_templates/plant_details.html',
    });
    // formlyConfig.setType({
    //     name: 'browse_plants',
    //     templateUrl: 'views/field_templates/browse_plants.html',
    // });
    formlyConfig.setType({
        name: 'employee_details',
        templateUrl: 'views/field_templates/my_employee_details.html',
    });
    formlyConfig.setType({
        name: 'myvehicledetails',
        templateUrl: 'views/field_templates/my_vehicle_details.html',
    });
    formlyConfig.setType({
        name: 'mymultipleselect',
        templateUrl: 'views/field_templates/my_multiple_select.html',
    });

    formlyConfig.setType({
        name: 'myselect',
        templateUrl: 'views/field_templates/my_select.html',
    });
    formlyConfig.setType({
        name: 'my_multiple_quantity',
        templateUrl: 'views/field_templates/my_multiple_quantity.html',
    });
    formlyConfig.setType({
        name: 'my_text_area',
        templateUrl: 'views/field_templates/my_text_area.html',
    });
    formlyConfig.setType({
        name: 'price_manifest',
        templateUrl: 'views/manifests/transfer_prices.html',
    });
    formlyConfig.setType({
        name: 'viewplantstable',
        templateUrl: 'views/tables/view-plants-table.html',
    });

    formlyConfig.setType({
        name: 'mybatchadjust',
        templateUrl: 'views/tables/batch-inventory-adjust.html',
    });

    formlyConfig.setType({
        name: 'mytable',
        templateUrl: 'views/tables/view-inventory.html',
    });

    formlyConfig.setType({
        name: 'mydashboard',
        templateUrl: 'views/nav/my.dashboard.grid.html',
    });

    formlyConfig.setType({
        name: 'mytasks',
        templateUrl: 'views/nav/my.task.grid.html',
    });

    formlyConfig.setType({
        name: 'mytaskcrud',
        templateUrl: 'views/nav/my.task.crud.html',
    });
    //
    // var myselect = "" +
    // '<ui-select ng-model="model[options.key]" class="form-control" id="myinput" theme="select2">' +
    // '<ui-select-match placeholder="{{to.placeholder}}">{{$select.selected[to.labelProp]}}</ui-select-match>' +
    // '<ui-select-choices group-by="\'category\' "data-repeat="{{to.ngOptions}}" position="down">'  +
    // '<span ng-bind-html="option[to.labelProp] | highlight: $select.search"></span>' +
    // '</ui-select-choices>' +
    // '</ui-select>';
    //
    var myremoveslider = ""
    // '<div ng-if="!model[options.key]"><a my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]">Select all</a></div>'
    // '<my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]" />cat'
    +'<rzslider rz-slider-always-show-bar="true" rz-slider-model="model[options.key]" rz-slider-floor="0" rz-slider-ceil="max"></rzslider>'

    // '<div ng-if="!!model[options.key]">{{model[options.key].length}}items selected</a></div></div>'
    formlyConfig.setType({
        name: 'myremoveslider',
        template: myremoveslider,
    });

    var selectallwaste = ""
    // '<div ng-if="!model[options.key]"><a my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]">Select all</a></div>'
    // '<my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]" />cat'
    +'<div ng-if="to.options.length != 1">Are you sure you want to {{to.label}} the following {{to.options.length}} items for destruction?</div>'
    +'<ul class="list-group"><li class="list-group-item" ng-repeat="option in to.options">{{option[to.labelProp]}}</li></ul>'
    // '<div ng-if="!!model[options.key]">{{model[options.key].length}}items selected</a></div></div>'
    formlyConfig.setType({
        name: 'selectallwaste',
        template: selectallwaste,
    });

    // var mymultipleselectwithselectall = "" +
    // '<div layout="col"><div><ui-select multiple ng-model="model[options.key]" class="form-control" id="myinput" theme="select2">' +
    // '<ui-select-match placeholder="{{to.placeholder}}">{{$item[to.labelProp]}}</ui-select-match>' +
    // // '<ui-select-match placeholder="{{to.placeholder}}">{{$select.selected[to.labelProp]}}</ui-select-match>' +
    // '<ui-select-choices data-repeat="{{to.ngOptions}}" group-by="\'category\'" position="down">'  +
    // '<span ng-bind-html="option[to.labelProp] | highlight: $select.search"></span>' +
    // '</ui-select-choices>' +
    // '</ui-select></div><div>Or</div>' +
    // // '<div ng-if="!model[options.key]"><a my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]">Select all</a></div>'
    // '<my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]"></div>'
    // // '<div ng-if="!!model[options.key]">{{model[options.key].length}}items selected</a></div></div>'
    // formlyConfig.setType({
    //     name: 'mymultipleselectwithselectall',
    //     template: mymultipleselectwithselectall,
    // });

    // var myselectallbutton = ""
    // // +'<a ng-click="selectAllWaste()">{{to.label}}</a>'
    // // +'<my-select-all-button items="{{to.options}}"/>'
    // +'<a my-select-all-button mydata="{{to.options}}" ng-model="model[option.key]">Select All {{to.label}}</a>'
    // formlyConfig.setType({
    //     name: 'myselectallbutton',
    //     template: myselectallbutton,
    // });

    var mydatetime = ""
    +'<input placeholder="{{to.placeholder}}" ng-model="model[options.key]" my-date-time-selector class="form-control" />'
    formlyConfig.setType({
        name: 'mydatetime',
        template: mydatetime,
    });

    // var myquantity = '' + '<input type="text" ng-model="model[options.key]" />'
    // '<md-input-container>' +

    // '</md-input-container>'
    // myquantity += '<div class="input-group"><input placeholder="{{to.placeholder}}" type="text" ng-model="model[options.key]" class="form-control">';
    // myquantity += '<span class="input-group-addon">g</span></div>';

    var myinput = '';
    // myinput += '<input type="text" placeholder="{{to.placeholder}}" ng-model="model[options.key]" class="form-control">';
    // myinput +=  '<input type="text" ng-model="model[options.key]" />'



    var fancyinput = '';
    fancyinput += '<input type="text" ng-model="model[options.key]" />';

    formlyConfig.setType({
        name: 'myinput',
        // extends: 'input',
        template: fancyinput
    });

    formlyConfig.setType({
        name: 'fancyinput',
        // extends: 'input',
        template: fancyinput
    });

    formlyConfig.setType({
        name: 'myquantity',
        template: fancyinput
    });

    var myquantitywithpercent = '';
    // myquantitywithpercent += '<div class="input-group"><input placeholder="{{to.placeholder}}" ng-change="updatepercent()" type="text" ng-model="model[options.key]" class="form-control">';
    // myquantitywithpercent += '<span class="input-group-addon">g</span><span ng-show="!!percent" class="input-group-addon">({{percent}})</span></div>';
    formlyConfig.setType({
        name: 'myquantitywithpercent',
        template: fancyinput
    });


//     var myselect = "" +
//     '<ui-select ng-model="model[options.key]" class="form-control" id="myinput" theme="select2">' +
// '<ui-select-match placeholder="{{to.placeholder}}">{{$select.selected[to.labelProp]}}</ui-select-match>' +
// '<ui-select-choices group-by="\'category\' "data-repeat="{{to.ngOptions}}" position="down">'  +
// '<span ng-bind-html="option[to.labelProp] | highlight: $select.search"></span>' +
// '</ui-select-choices>' +
// '</ui-select>';
//         // '<md-select ng-model="model[options.key]">' +
//         //     '<md-option ng-value="option[to.valueProp]" ng-repeat="option in to.options">' +
//         //         '{{option[to.labelProp]}}' +
//         //     '</md-option>' +
//         // '</md-select>'
//
//     formlyConfig.setType({
//         name: 'myselect',
//         // extends: 'select',
//         templateUrl: myselect,
//         // template: '<label>{{to.label}}</label><ui-select options="to.ngOptions" ng-model="model[options.key]" theme="bootstrap" ng-required="{{to.required}}" ng-disabled="{{to.disabled}}" reset-search-input="false"> <ui-select-match placeholder="{{to.placeholder}}"> {{$select.selected[to.labelProp || \'name\']}} </ui-select-match> <ui-select-choices group-by="to.groupBy" repeat="option[to.valueProp || \'value\'] as option in to.options | filter: $select.search"> <div ng-bind-html="option[to.labelProp || \'name\'] | highlight: $select.search"></div> </ui-select-choices> </ui-select><p />'
//     });

    // var mymultipleselect = myselect


    var w = ''
    // +'<div "><md-input-container>'
    // +'<div class="well well-sm z-depth-1"><md-input-container>'
        +'<md-input-container class="md-padding">'
        +'<label>{{to.label}}</label>'
        +'<formly-transclude></formly-transclude></md-input-container>'
    formlyConfig.setWrapper({
        types:
        [
            'myquantity',
            'fancyinput',
            // 'myselect',
            'myinput',
            // 'mymultipleselect',
            'mydatetime',
            // 'mymultipleselectwithselectall',
            'myquantitywithpercent',
        ],
        template: w
    });
    var ws = ''
    // +'<div class="well well-sm z-depth-1">'
        +'<div class="md-padding">'
        +'<div>'
        +'<formly-transclude></formly-transclude></div>'

    formlyConfig.setWrapper({
        types:
        [
            // 'myquantity',
            // 'fancyinput',
            'myselect',
            'my_text_area',
            'mycheckbox',
            // 'myinput',
            'mymultipleselect',
            // 'mydatetime',
            'mymultipleselectwithselectall',
            // 'myquantitywithpercent',
        ],
        template: ws
    });
});
