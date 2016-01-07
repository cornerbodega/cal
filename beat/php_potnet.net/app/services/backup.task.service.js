(function () {
    angular
    .module('myApp')
    .factory('TaskService', [
        TaskService
    ]);

    function TaskService() {
        console.log('Task Service!!!!');
        function titler (title, desc) {
            return { title: title, desc: desc };
        }
        function info (task) { // title and desc for task 'page'
        var taskinfo = {};
        taskinfo.inventory_adjust = titler('Adjust Quantity', 'Use this function to update the previously submitted quantity of an inventory item.')
        taskinfo.manifest_view = titler('View Manifests', 'View previously submitted outbound manifests.')
        taskinfo.transfers_view_inbound = titler('View Inbound Transfers', 'View previously submitted inbound transfers.')
        taskinfo.inventory_manifest = titler('New Manifest', 'Create a new manifest.')
        taskinfo.view_inventory = titler('View Inventory', '')
        taskinfo.waste_destroy_schedule = titler('Schedule All Waste for Destruction', 'Inform the WSLCB of your intention to destroy all waste products currently in inventory.')
        taskinfo.waste_destroy = titler('Destroy All Waste Previously Scheduled for Destruction', 'Inform the WSLCB of your intention to destroy all waste products currently in inventory.')
        taskinfo.inventory_convert = titler('Convert an Inventory Item', 'Record the conversion an existing inventory item into a new type.')
        taskinfo.batch_inventory_adjust = titler('Adjust Multiple', 'Adjust the remaining quantity of multiple inventory items at once. ')
        return taskinfo[task];
    }
    function gettaskoptions (path) { // select options for formly
        var o = [];
        if (path === "samples") {
            o = [
                // create a filter(ishdevice) for showing only untransferred manifests
                { label: 'View QA Sample Results', id: 'qa_view_sample_results'},
                // { label: 'View Inbound Transfers', id: 'transfers_view_inbound'},
            ]
        }
        if (path === "inventory") {
            o = [
                {
                    label: 'View',
                    id: 'view_inventory',
                },
                {
                    label: 'Adjust',
                    id: 'inventory_adjust',
                },
                {
                    label: 'Schedule Destroy',
                    id: 'inventory_destroy_schedule',
                    category: 'Track Waste'

                },
                {
                    label: 'Schedule All Waste for Destruction',
                    id: 'waste_destroy_schedule',
                    category: 'Inventory Cleanup'
                },
                {
                    label: 'Destroy',
                    id: 'waste_destroy',
                    category: 'Inventory Cleanup'

                },
                {
                    label: 'Schedule All Zero Quantity Items for Destruction',
                    id: 'schedule_zeros_for_destruction',
                    category: 'Inventory Cleanup'

                },
                {
                    label: 'Create Derivative',
                    id: 'inventory_convert',
                },
                {
                    label: 'Batch Adjust Inventory',
                    id: 'batch_inventory_adjust',
                    category: 'Inventory Cleanup'
                }

            ];
        }
        if (path === "manifests") {
            o = [
                { label: 'View Manifests', id: 'manifest_view', category: 'Manifests'},
                { label: 'Create New Manifest', id: 'inventory_manifest', category: 'Manifests'},
                { label: 'Transfer Existing Manifest', id: 'manifest_transfer', category: 'Transfers'},
                { label: 'Void Existing Manifest', id: 'manifest_void', category: 'Manifests'},
                { label: 'View Inbound Transfers', id: 'transfers_view_inbound', category: 'Transfers'},
                { label: 'View Outbound Transfers', id: 'transfers_view_outbound', category: 'Transfers'},
                { label: 'Void Outbound Transfer', id: 'transfers_view_outbound', category: 'Transfers'},
            ]
        }
        if (path === "plants") {
            o = [
                { label: 'View Plants', id: 'plant_view' },
                { label: 'Create a New Plant', id: 'plant_new' },
                { label: 'Move Rooms', id: 'plant_move' },
                { label: 'Schedule Destruction', id: 'plant_destroy_schedule' },
                { label: 'Destroy', id: 'plant_destroy' },
                { label: 'Schedule Harvest', id: 'plant_harvest_schedule' },
                { label: 'Harvest', id: 'plant_harvest' },
                { label: 'Log Waste', id: 'plant_waste_weigh' },
                { label: 'Cure', id: 'plant_cure' },
                { label: 'Convert to Inventory', id: 'plant_convert_to_inventory' },
                { label: 'Modify Plant Yield', id: 'plant_yield_modify' },
                { label: 'Modify Plant', id: 'plant_modify' },
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

    function taskfields (path) {
        // TODO
        // use field data service for this!
        //var cappath = path.charAt(0).toUpperCase() + path.slice(1)
        //  $http.get(json).success(function(res){ return res; });
        return [
            {
                key: 'task',
                type: 'myselect',
                templateOptions: {
                    options: gettaskoptions(path),
                    // options: [{label:'label1',id:2},{label:'label4',id:23},{label:'label5',id:255}],
                    labelProp: 'label',
                    valueProp: 'id',
                    ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
                    // ngOptions: 'option.id as option.label group by option.category for option in to.options',
                    // ngChange: function () { console.log('changed!!'); }
                    label: 'I would like to',
                    placeholder: 'Select '+path+' action'
                }
            },
        ];
    };
    return {
        // tasks: tasks,
        taskfields : taskfields,
        taskinfo: taskinfo
    };
};
})();
