(function () {
    angular
    .module('myApp')
    .factory('TaskService', [
    TaskService
]);

function TaskService() {
    console.log('Task Service!!!!');
    // function titler (title, desc) {
    //     return { title: title, desc: desc };
    // }



    function info( task ) { // title and desc for task 'page'
    //     var taskinfo = {};
    //     taskinfo.inventory_adjust = titler('Adjust Quantity', 'Use this function to update the previously submitted quantity of an inventory item.')
    //     taskinfo.manifest_view = titler('View Manifests', 'View previously submitted outbound manifests.')
    //     taskinfo.transfers_view_inbound = titler('View Inbound Transfers', 'View previously submitted inbound transfers.')
    //     taskinfo.inventory_manifest = titler('New Manifest', 'Create a new manifest.')
    //     taskinfo.view_inventory = titler('View Inventory', '')
    //     taskinfo.waste_destroy_schedule = titler('Schedule All Waste for Destruction', 'Inform the WSLCB of your intention to destroy all waste products currently in inventory.')
    //     taskinfo.waste_destroy = titler('Destroy All Waste Previously Scheduled for Destruction', 'Inform the WSLCB of your intention to destroy all waste products currently in inventory.')
    //     taskinfo.inventory_convert = titler('Convert an Inventory Item', 'Record the conversion an existing inventory item into a new type.')
    //     taskinfo.batch_inventory_adjust = titler('Adjust Multiple', 'Adjust the remaining quantity of multiple inventory items at once. ')
    // return taskinfo[task];
}

function getTaskIcon(path, title) {
    console.log(path + ' ' + title);
    var o = gettaskoptions(path)
    console.log(o);
    o.map(function(option){
        if (option.id === title) return {icon: option.icon, label: option.label}
    })
}
function gettaskoptions (path) { // select options for formly
    var o = [];
    // path = p.substring(1,p.length)
    // if (path === "/traceability/qa_lab") {
    //     o = [
    //         { label: 'View QA Labs', id: 'qa_lab', icon:'' },
    //     ]
    // }

    if (path === "/traceability/rooms/inventory_rooms") {
        o = [
            // { label: 'Browse Inventory Rooms', id: 'browse_inventory_rooms', icon:'' },
            { label: 'Add Inventory Room', id: 'inventory_room_add', icon:'fa-plus-circle' },
            // { label: 'Modify Inventory Room', id: 'inventory_room_modify', icon:'' },
            { label: 'Remove Inventory Room', id: 'inventory_room_remove', icon:'fa-minus-circle' },
        ]
    }
    if (path === "/traceability/rooms/plant_rooms") {
        o = [
            // { label: 'Browse Plant Rooms', id: 'browse_plant_rooms', icon:'' },
            { label: 'Add Plant Room', id: 'plant_room_add', icon:'fa-plus-circle' },
            // { label: 'Modify Plant Room', id: 'plant_room_modify', icon:'' },
            { label: 'Remove Plant Room', id: 'plant_room_remove', icon:'fa-minus-circle' },
        ]
    }
    if (path === "/traceability/rooms") {
        o = [
            { label: 'Plant Rooms', id: 'plant_rooms', icon:'fa-lemon-o' },
            { label: 'Inventory Rooms', id: 'inventory_rooms', icon:'fa-cubes' },
        ]
    }
    if (path === "/traceability/vehicles") {
        o = [
            { label: 'Browse Vehicles', id: 'browse_vehicles', icon:'' },
            { label: 'Add Vehicle', id: 'vehicle_add', icon:'' },
            // { label: 'Modify Vehicle', id: 'vehicle_modify', icon:'' },
            { label: 'Remove Vehicle', id: 'vehicle_remove', icon:'' }
        ];
    }
    if (path === "/traceability/employees") {
        o = [
            { label: 'Browse Employees', id: 'browse_employees', icon:'fa-folder-open' },
            { label: 'Add Employee', id: 'employee_add', icon:'fa-user-plus' },
            // { label: 'Modify Employee', id: 'employee_modify', icon:'' },
            { label: 'Remove Employee', id: 'employee_remove', icon:'fa-user-times' }
        ];
    }
    if (path === "samples") {
        o = [
            { label: 'View QA Sample Results', id: 'qa_view_sample_results'},
        ];
    }
    if (path === "/traceability/inventory") {
        o = [
            {
                label: 'Browse Inventory',
                id: 'view_inventory',
                icon: 'fa-folder-open'
            },
            {
                label: 'Manifests & Transfers',
                id: 'manifests',
                icon: 'fa-truck',
            },
            {
                label: 'Adjust',
                id: 'inventory_adjust',
                icon: 'fa-crop'
            },
            {
                label: 'Schedule Destroy',
                id: 'inventory_destroy_schedule',
                category: 'Track Waste',
                icon: 'fa-crosshairs'

            },
            // {
            //     label: 'Schedule All Waste',
            //     id: 'waste_destroy_schedule',
            //     category: 'Inventory Cleanup',
            //     icon: 'fa-gavel'
            // },
            {
                label: 'Destroy',
                id: 'inventory_destroy',
                category: 'Inventory Cleanup',
                icon: 'fa-trash'

            },
            // {
            //     label: 'Schedule All Zeroes',
            //     id: 'schedule_zeros_for_destruction',
            //     category: 'Inventory Cleanup',
            //     icon: 'remove'
            //
            // },
            {
                label: 'Create Derivative',
                id: 'inventory_convert',
                icon: 'fa-code-fork'
            },
            // {
            //     label: 'Batch Adjust Inventory',
            //     id: 'batch_inventory_adjust',
            //     category: 'Inventory Cleanup'
            // }

        ];
    }
    if (path === "/traceability/inventory/manifests/inbound") {
        o = [
            { label: 'Browse Inbound', id: 'transfers_view_inbound', icon: 'fa-folder-open'},
            { label: 'Receive New Inbound', id: 'inventory_transfer_inbound', icon: 'fa-cart-arrow-down'},
        ]
    }
    if (path === "/traceability/inventory/manifests/outbound") {
        o = [
            { label: 'Browse Outbound', id: 'browse_manifests', icon: 'fa-folder-open'},
            { label: 'Schedule New Outbound', id: 'inventory_manifest', icon: 'fa-calendar-plus-o'},
            { label: 'Send Outbound', id: 'inventory_transfer_outbound', icon: 'fa-envelope'},
            // { label: 'Void Existing Manifest', id: 'manifest_void', category: 'Manifests'},
            // { label: 'View Inbound', id: 'transfers_view_inbound', category: 'Transfers'},
            // { label: 'Receive Inbound', id: 'inventory_transfer_inbound', category: 'Transfers'},
            // { label: 'View Outbound Transfers', id: 'transfers_view_outbound', category: 'Transfers'},
            // { label: 'Void Outbound Transfer', id: 'transfers_view_outbound', category: 'Transfers'},
        ]
    }
    if (path === "/traceability/inventory/manifests") {
        o = [
            { label: 'Inbound', id: 'inbound', icon: 'fa-arrow-circle-down'},
            { label: 'Outbound', id: 'outbound', icon: 'fa-arrow-circle-up'},
        ]
    }
    if (path === "/traceability/plants") {
        // machine-learning opportunity here. have a stored order
        // variable that changes the rank of nav boxes per click
        // so that over time, the most clicked box is on top for a user
        o = [
            { label: 'Browse Plants', id: 'browse_plants' },
            { label: 'Create a New Plant', id: 'plant_new' },
            { label: 'Change Rooms', id: 'plant_move' },
            { label: 'Schedule Destruction', id: 'plant_destroy_schedule' },
            { label: 'Destroy', id: 'plant_destroy' },
            { label: 'Schedule Harvest', id: 'plant_harvest_schedule' },
            { label: 'Harvest', id: 'plant_harvest' },
            // { label: 'Log Waste', id: 'plant_waste_weigh' },
            { label: 'Cure', id: 'plant_cure' },
            { label: 'Sell Clone', id: 'plant_convert_to_inventory' },
            // { label: 'Modify Plant Yield', id: 'plant_yield_modify' },
            // { label: 'Modify Plant', id: 'plant_modify' },
        ]
    }

    return o;
}
// function tasks () {
//
// }
function taskoptions (path) { // plugs in to formly
    // var json = 'assets' + path + '.json';
    console.log("Get tasks for " + path);
    return gettaskoptions(path);
    //$http.get(json).success(function(res){ return res; });
}

function taskinfo (task) {
    return info(task);
}

function taskfields () {
    // TODO
    // use field data service for this!
    //var cappath = path.charAt(0).toUpperCase() + path.slice(1)
    //  $http.get(json).success(function(res){ return res; });
    return [
        {
            key: 'task',
            type: 'mytasks',
            // type: 'myselect',
            templateOptions: {
                options: gettaskoptions(path),
                // options: [{label:'label1',id:2},{label:'label4',id:23},{label:'label5',id:255}],
                labelProp: 'label',
                valueProp: 'id',
                ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
                // ngOptions: 'option.id as option.label group by option.category for option in to.options',
                // ngChange: function () { console.log('changed!!'); }
                // label: 'I would like to',
                // placeholder: 'Select '+path+' action',
                controller: /* @ngInject */ function($scope) {
                    console.log($scope);
                    $scope.selecttask = function (task) {
                        console.log("taskset");
                        console.log($scope.vm);
                        // $scope.vm.ontask()
                    }
                }
            }
        },
    ];
};
return {
    // tasks: tasks,
    taskfields : taskfields,
    gettaskoptions: gettaskoptions,
    getTaskIcon: getTaskIcon,

    // taskinfo: taskinfo
};
};
})();
