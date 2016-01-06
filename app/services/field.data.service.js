(function () {
    angular
    .module('myApp')
    .factory('FieldDataService', ['$mdDialog', '$location', 'DynamicStaticDataService', '$rootScope',
    FieldDataService
]);

function FieldDataService($mdDialog, $location, DynamicStaticDataService, $rootScope) {
    var f = {}; // formly object needed for
    f.new_post_owner = {
        key: 'new_post_owner',
        type: 'myinput',
        templateOptions: {
            label: 'Name',
        },
    }
    f.new_post_phone = {
        key: 'new_post_phone',
        type: 'myinput',
        templateOptions: {
            label: 'Phone',
        },
    }
    f.new_post_email = {
        key: 'new_post_email',
        type: 'myinput',
        templateOptions: {
            label: 'Email',
        },
    }
    f.new_post_image = {
        key: 'new_post_email',
        type: 'myinput',
        templateOptions: {
            label: 'Email',
        },
    }
    f.new_post_price = {
        key: 'new_post_price',
        type: 'myinput',
        templateOptions: {
            label: 'Price',
        },
    }
    f.new_post_description = {
        key: 'new_post_description',
        type: 'new_post_description',
        templateOptions: {
            label: 'Please provide a description of the issue',
        },
    }
    f.help_message= {
        key: 'help_message',
        type: 'mytextarea',
        templateOptions: {
            label: 'Please provide a description of the issue',
        },
    }
    f.select_plant_derivatives = {
        key: 'plant',
        type: 'myselect',
        // type: 'plant_derivatives',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Harvested Wet Flower',
            placeholder: 'Wet Flower',
            // labelProp: 'strain',
            labelProp: 'label',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {

            // console.log(Data.formatted.plant_derivatives);
            //  console.log(Data.formatted.plant_derivatives.toCure);
             $scope.to.options = Data.formatted.plant_derivatives.toCure
            //  $scope.to.options.map(function(plant){
            //     if (plant.inventoryid === "6044930214072254") console.log("WOWZERS!!");
            //  })
        }
    }
  //   "plant": {
  //     "wholeweight": "118.90",
  //     "room": "3",
  //     "location": "416545",
  //     "deleted": 0,
  //     "collectadditional": 0,
  //     "inventoryid": "3371766638471872",
  //     "sessiontime": "1419640549",
  //     "weight": "118.9",
  //     "harvestcollect": 1,
  //     "inventorytype": 27,
  //     "transactionid": "1346503",
  //     "plantid": "9246182783137305",
  //     "transactionid_original": "1346503",
  //     "curecollect": 0,
  //     "roomlabel": "Flowering B"
  //   }
  // }
    f.show_qa_labs = {
        key: 'qa_lab',
        type: 'show_qa_labs',
    }
    f.plant_harvest_other_plant_material_amount = {
        key: 'plant_harvest_other_plant_material_amount',
        type: 'myquantity',
        templateOptions: {
            label: 'Other Material (g)',
        },
    }
    f.plant_harvest_waste_amount = {
        key: 'plant_harvest_waste_amount',
        type: 'myquantity',
        templateOptions: {
            label: 'Waste (g)',
        },
    }
    f.plant_harvest_flower_amount = {
        key: 'plant_harvest_flower_amount',
        type: 'myquantity',
        templateOptions: {
            label: 'Flower (g)',
        },
    }
    f.collectadditional = {
        key: 'final',
        type: 'mycheckbox',
        templateOptions: {
            label: 'Final Harvest',
        },
    }
    f.select_inventory_room = {
        key: 'room',
        type: 'myselect',
        templateOptions: {
            valueProp: 'roomid',
            labelProp: 'name',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Room',
            placeholder: 'Inventory Room',
            options: []
        },
        controller: function ($scope, Data) {
            // $scope.to.options = Data.formatted.getinventoryRooms().inventoryroomsarray
            $scope.to.options = Data.formatted.inventory_rooms
        },
    }
    f.inventory_room_name = {
        key: 'name',
        type: 'myinput',
        templateOptions: {
            label: 'New Room Name',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            var mylocation = Data.formatted.vendors.vendorsbyubi[JSON.parse(sessionStorage.user).ubi].location;
            var inventory_rooms = Data.formatted.inventory_rooms
            var maxid = 0
            inventory_rooms.map(function(room) {
                if (room.roomid > maxid) maxid = parseInt(room.roomid)
            })
            $scope.model.id = maxid + 1
            $scope.model.mylocation = mylocation
        }
    };
    f.plant_room_name = {
        key: 'name',
        type: 'myinput',
        templateOptions: {
            label: 'New Room Name',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            var mylocation = Data.formatted.vendors.vendorsbyubi[JSON.parse(sessionStorage.user).ubi].location;
            var plant_rooms = Data.formatted.plant_rooms.plantroomsarray
            var maxid = 0
            plant_rooms.map(function(room) {
                if (room.roomid > maxid) maxid = parseInt(room.roomid)
            })
            $scope.model.id = maxid + 1
            $scope.model.mylocation = mylocation
        }
    };
    f.plant_is_mother = {
        key: 'mother',
        type: 'mycheckbox',
        templateOptions: {
            label: 'This will be a mother plant',
        }
    }
    f.select_plant_source = {
        key: 'source',
        type: 'myselect',
        templateOptions: {
            valueProp: 'id',
            labelProp: 'inventorylabel',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Source',
            placeholder: 'Select the source of the new plant',
            options: [],
        },
        controller: /* @ngInject */ function ($scope, Data) {
            var source_types = [7, 10, 11, 12]
            console.log('WHAT THE HET');
            var vendorsbyubi = Data.formatted.vendors.vendorsbyubi;
            var mylocation = vendorsbyubi[JSON.parse(sessionStorage.user).ubi].location;
            $scope.model.mylocation = mylocation
            $scope.to.options = Data.formatted.inventory.inventoryarray.map(function(item){
                if (source_types.indexOf(item.inventorytype) > -1){
                    return item
                }
            })
        }
    }
    f.select_plant_room = {
        key: 'room',
        type: 'myselect',
        templateOptions: {
            valueProp: 'roomid',
            labelProp: 'name',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Room',
            placeholder: 'Plant Room',
            options: []
        },
        controller: function ($scope, Data) {
            // $scope.to.options = Data.formatted.getPlantRooms().plantroomsarray
            $scope.to.options = Data.formatted.plant_rooms.plantroomsarray
        },
    }
    f.receive_items = {
        key: 'accepted_items',
        type: 'inventory_transfer_inbound_request',
        // templateOptions: {
        //     label: 'Name',
        // },
        hideExpression: '!model.items_to_accept',
        // controller: /* @ngInject */ function ($scope, Data) {
        // }
    };
    f.select_items_to_accept = {
        key: 'items_to_accept',
        type: 'mymultipleselect',
        templateOptions: {
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Items to accept',
            placeholder: 'Select items to accept',
            options: [],
        },
        hideExpression: '!model.inbound_manifest',
        controller: function ($scope, ConnectService, Data) {
            var vendorsbyubi = Data.formatted.vendors.vendorsbyubi;
            var mylocation = vendorsbyubi[JSON.parse(sessionStorage.user).ubi].location;
            ConnectService.post({action:'inventory_transfer_lookup',manifest_id:$scope.model.inbound_manifest.manifest_id, location: mylocation }, fail, function(res){
                // console.log(res);
                res.data.map(function(item){
                    // var date = new Date(item.sessiontime * 1000).toLocaleDateString()
                    item.label = '['+item.barcode_id+'] ' + item.quantity + ' x ' + item.product
                    if (!!item.description) item.label += item.description
                    if (item.is_sample === 1) { item.label += ' (sample)'}
                })
                $scope.model.mylocation = mylocation
                $scope.to.options = res.data
            })
        },

    }

    f.select_inbound_manifest_to_receive = {
        key: 'inbound_manifest',
        type: 'myselect',
        templateOptions: {
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Inbound Transfers',
            placeholder: 'Select inbound transfer',
            options: [],
        },
        controller: function ($scope, ConnectService, Data) {
            var vendorsbyubi = Data.formatted.vendors.vendorsbyubi;
            var mylocation = vendorsbyubi[JSON.parse(sessionStorage.user).ubi].location;
            // console.log(JSON.parse(sessionStorage.user).ubi);
            console.log(mylocation);
            // mylocation =''
            ConnectService.post({action:'inventory_manifest_lookup',location: mylocation }, fail, function(res){
                // console.log(res);
                res.data.map(function(manifest){
                    manifest.label = manifest.transfer_date + ' [' +manifest.manifest_id+'] ' + manifest.trade_name + ' ('+manifest.item_count+')'
                })
                $scope.to.options = res.data

                // "inbound_transfers": [
                //   {
                //     "return_indicated": 0,
                //     "item_count": 1,
                //     "transfer_date": "12/26/2015",
                //     "trade_name": "THE POTTING BENCH",
                //     "manifest_id": "0279310885689355",
                //     "license_number": "416545"
                //   }
                // ]
            })

            // $scope.to.options = Data.formatted.inbound_transfers')).map(function(transfer){
            //     transfer.from_vendor = vendorsbyid[transfer.outbound_license].name
            //     transfer.label = transfer.datestring + ' ' + transfer.from_vendor + ' ' + transfer.label
            //     return transfer
            // })
        },

    }
    f.inbound_transfer_details = {
        key: 'transfer_details',
        type: 'inbound_transfer_details',
        hideExpression: '!model.inbound_transfers',
        controller: /* @ngInject */ function ($scope, Data) {
            // $scope.model.hire_date = $scope.model.employee.hire_date
        }
    };
    f.select_inbound_transfer = {
        key: 'inbound_transfers',
        type: 'mymultipleselect',
        templateOptions: {
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Inbound Transfers',
            placeholder: 'Select inbound transfer',
            options: [],
        },
        controller: function ($scope, Data) {
            var vendorsbyid = Data.formatted.vendors.vendorsbyid;
            console.log(Data);
            $scope.to.options = Data.formatted.inbound_transfers.map(function(transfer){
                transfer.from_vendor = vendorsbyid[transfer.outbound_license].name
                transfer.label = transfer.datestring + ' ' + transfer.from_vendor + ' ' + transfer.label
                var a = getdatestringfor(transfer.sessiontime)
                // console.log(a);
                var b = a.split('/')
                transfer.category =  b[0]  +'/' +  b[2]
                return transfer
            })
        },

    }
    f.select_outbound_transfer = {
        key: 'outbound_transfers',
        type: 'mymultipleselect',
        templateOptions: {
            // valueProp: 'manifestid',
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Outbound Transfers',
            placeholder: 'Select outbound transfer',
            options: [],
            // options: Data.formatted.manifests')).map(function(manifest){
            //     if (!manifest.transferred) return manifest
            // })
        },
        controller: function ($scope, Data) {

            $scope.to.options = Data.formatted.manifests.map(function(manifest){
                if (!!manifest.transferred) return manifest
            });
        }

    }
    f.select_manifests = {
        key: 'manifests',
        type: 'mymultipleselect',
        templateOptions: {
            // valueProp: 'manifestid',
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Manifests',
            placeholder: 'Select manifests',
            options: [],
            // options: Data.formatted.manifests')).map(function(manifest){
            //     if (!manifest.transferred) return manifest
            // })
        },
        controller: function ($scope, Data) {
            $scope.to.options = Data.formatted.manifests;
        },

    }
    f.manifest_details = {
        key: 'inventory_details',
        type: 'manifest_details',
        hideExpression: '!model.manifests',
        controller: /* @ngInject */ function ($scope, Data) {
            // $scope.model.hire_date = $scope.model.employee.hire_date
        }
    };
    f.inventory_details = {
        key: 'inventory_details',
        type: 'inventory_details',
        // templateOptions: {
        //     label: 'Hire Date',
        // },
        hideExpression: '!model.inventoryitems',
        controller: /* @ngInject */ function ($scope, Data) {
            // $scope.model.hire_date = $scope.model.employee.hire_date
        }
    };
    f.select_plants = {
        key: 'plants',
        type: 'mymultipleselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Plants',
            placeholder: 'Plants',
            // labelProp: 'strain',
            labelProp: 'plantlabel',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.to.options = Data.formatted.plants
        }
    }
    f.select_sd_plants = angular.copy(f.select_plants)
    f.select_sd_plants.controller = function ($scope, Data) {
        $scope.to.options = Data.formatted.plants.map(function(plant){
            if (plant.removescheduled) return plant
        })
    }
    f.select_sh_plant = angular.copy(f.select_plants)
    f.select_sh_plant.controller = function ($scope, Data) {
        $scope.to.options = Data.formatted.plants.map(function(plant){
            if (plant.harvestscheduled) return plant
        })
    }
    f.select_sh_plant.type = 'myselect'
    f.select_sh_plant.key = 'plant'
    f.select_sh_plant.templateOptions.label = 'Plant to Harvest'
    f.select_sh_plant.templateOptions.placeholder = 'Plant to Harvest'

    f.select_plant = angular.copy(f.select_plants)
    f.select_plant.key = 'plant'
    f.select_plant.type = 'myselect'




    f.plants_details = {
        key: 'plants_details',
        type: 'plants_details',
        // templateOptions: {
        //     label: 'Hire Date',
        // },
        hideExpression: '!model.plants',
        controller: /* @ngInject */ function ($scope, Data) {
            // $scope.model.hire_date = $scope.model.employee.hire_date
        }
    };
    f.modify_employee_name = {
        key: 'employee_name',
        type: 'myinput',
        templateOptions: {
            label: 'Name',
        },
        hideExpression: '!model.employee',
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.employee_name = $scope.model.employee.employee_name
        }
    };
    f.modify_hire_date = {
        key: 'hire_date',
        type: 'mydatetime',
        templateOptions: {
            label: 'Hire Date',
        },
        hideExpression: '!model.employee',
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.hire_date = $scope.model.employee.hire_date
        }
    };
    f.modify_birth_date = {
        key: 'birth_date',
        type: 'mydatetime',
        templateOptions: {
            label: 'Birth Date',
        },
        hideExpression: '!model.employee',
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.birth_date = $scope.model.employee.birth_date
        }
    };

    f.employee_name = {
        key: 'employee_name',
        type: 'myinput',
        templateOptions: {
            label: 'Name',
        },
    };
    f.hire_date = {
        key: 'hire_date',
        type: 'mydatetime',
        templateOptions: {
            label: 'Hire Date',
        },
    };
    f.birth_date = {
        key: 'birth_date',
        type: 'mydatetime',
        templateOptions: {
            label: 'Birth Date',
        },
    };
    f.employee_details = {
        key: 'employee_details',
        type: 'employee_details',
        hideExpression: '!model.employee',
    };
    f.select_employee = {
        key: 'employee',
        type: 'myselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Employee',
            placeholder: 'Employee',
            labelProp: 'employee_name',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {
            // $scope.to.options = Data.formatted.employees'))
            $scope.to.options = Data.formatted.employees
        }
    }
    f.modify_nickname = {
        key: 'nickname',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Nickname',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.nickname = $scope.model.vehicle.nickname
        }
    }
    f.modify_color = {
        key: 'color',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Color',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.color = $scope.model.vehicle.color
        }
    }
    f.modify_make = {
        key: 'make',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Make',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.make = $scope.model.vehicle.make
        }
    }
    f.modify_model = {
        key: 'model',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Model',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.model = $scope.model.vehicle.model
        }
    }
    f.modify_plate = {
        key: 'plate',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Plate',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.plate = $scope.model.vehicle.plate
        }
    }
    f.modify_vin = {
        key: 'vin',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Vin',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.vin = $scope.model.vehicle.vin
        }
    }
    f.modify_year = {
        key: 'year',
        type: 'myinput',
        hideExpression: '!model.vehicle',
        templateOptions: {
            label: 'Year',
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.model.year = $scope.model.vehicle.year
        }
    }
    f.nickname = {
        key: 'nickname',
        type: 'myinput',
        templateOptions: {
            label: 'Nickname',
        }
    }
    f.color = {
        key: 'color',
        type: 'myinput',
        templateOptions: {
            label: 'Color',
        }
    }
    f.make = {
        key: 'make',
        type: 'myinput',
        templateOptions: {
            label: 'Make',
        }
    }
    f.model = {
        key: 'model',
        type: 'myinput',
        templateOptions: {
            label: 'Model',
        }
    }
    f.plate = {
        key: 'plate',
        type: 'myinput',
        templateOptions: {
            label: 'Plate',
        }
    }
    f.vin = {
        key: 'vin',
        type: 'myinput',
        templateOptions: {
            label: 'Vin',
        }
    }
    f.year = {
        key: 'year',
        type: 'myinput',
        templateOptions: {
            label: 'Year',
        }
    }
    f.vehicle_details = {
        key: 'vehicle_details',
        type: 'myvehicledetails',
        // templateOptions: {
        //     label: 'Vehicle Label',
        // },
        hideExpression: '!model.vehicle'
    }
    f.select_vehicle = {
        key: 'vehicle',
        type: 'myselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Vehicle',
            placeholder: 'Vehicle',
            labelProp: 'nickname',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.to.options = Data.formatted.vehicles
        }
    }
    f.select_inventory_destroy = {
        key: 'inventoryitems',
        type: 'mymultipleselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Inventory Items',
            placeholder: 'Inventory Items',
            labelProp: 'inventorylabel',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {
            $scope.to.options = Data.formatted.inventory.inventoryarray.map(function(item){
                if(item.inventorystatus===1){ return item }
            })
        }
    }
    f.derivative_usable = {
        key: 'derivative_usable',
        type: 'myquantity',
        templateOptions: {
            label: 'New Derivative Weight Per Unit',
        },
        hideExpression: '!!model.derivative_type.weighable'
    }
    f.adjust_quantity_multiple = {
        key: 'quantity',
        type: 'my_multiple_quantity', // change to select, async sync_inventory
        templateOptions: {
            // placeholder: 'Enter a new quantity',
            // label: 'New Quantity',
            showuom: true
        },
        hideExpression: '!model.inventoryitems.length > 0',
        // expressionProperties: {
        //     'templateOptions.options': 'model.inventoryitems'
        // },
    };

    f.manifest_approximate_route = {
        key: 'approximate_route',
        type: 'my_text_area',
        templateOptions: {
            label: 'Approximate Route',
        }
    }
    f.select_manifest_to_transfer = {
        key: 'manifest_to_transfer',
        type: 'myselect',
        templateOptions: {
            valueProp: 'manifestid',
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Manifest',
            placeholder: 'Select a manifest to transfer',
            options: [],
            // options: Data.formatted.manifests')).map(function(manifest){
            //     if (!manifest.transferred) return manifest
            // })
        },
        controller: function ($scope, Data) {
            $scope.to.options = Data.formatted.manifests.map(function(manifest){
                if (!manifest.transferred) return manifest
            })
        },

    }
    f.price_manifest = {
        key: 'manifest_prices',
        type: 'price_manifest',
        templateOptions: {
            valueProp: 'manifestid',
            labelProp: 'label',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'New Derivative Type',
            // placeholder: 'Price Manifest',
            options: []
        },
        hideExpression: '!model.manifest_to_transfer',
        expressionProperties: {
            'templateOptions.options': 'model.manifest_to_transfer'
        },
        controller: function ($scope, Data) {
            console.log($scope.model.manifest_to_transfer);
            console.log('Price those manifests!!');
            // console.log($scope, Data);
            // console.log($scope.templateOptions.options);
            // $scope.manifest_to_transfer = $scope.model.manifest_to_transfer
            // $scope.manifest_to_transfer = $rootScope.manifest_to_transfer
            // console.log($scope.items);

        }
    }
    // f.browse_plants = {
    //     key: 'plants',
    //     type: 'browse_plants',
    //     controller: /* @ngInject */ function($scope, Data) {
    //         console.log('let us brows dem plantz');
    //         $scope.plants = Data.formatted.plants'))
    //     }
    // }



    f.plant_strain = {
        key: 'strain',
        type: 'myinput',
        templateOptions: {
            label: 'New Plant Strain',
        }
    }
    f.view_inventory_table = {
        key: 'inventoryitem',
        type: 'mytable',
        templateOptions: {
            label: 'Inventory Item',
            labelProp: 'inventorylabel',
            options: []
        },
        controller: /* @ngInject */ function($scope,  $rootScope) {
            // $scope.inventorybytype = $rootScope.inventorybytype
            // $scope.inventory = $rootScope.inventory
            // $scope.mytypes = $rootScope.mytypes
            $scope.inventorybytype = Data.formatted.inventorybytype
            $scope.inventory = Data.formatted.inventory
            $scope.mytypes = Data.formatted.mytypes

            $scope.searching = function () {
                $scope.mytypes.map (function (t) {
                    t.showtype = true
                })
            }
            $scope.toggleshowtype = function (type) {
                if (typeof type.showtype === 'undefined') {
                    type.showtype = true
                    console.log('woah!!');
                    return
                }
                console.log('item.showdetail');
                type.showtype = !type.showtype
            }

            $scope.toggledetail = function (item) {
                if (typeof item.showdetail === 'undefined') {
                    item.showdetail = true
                    return
                }
                console.log('item.showdetail');
                item.showdetail = !item.showdetail
            }
        }
    };

    f.inventory_convert_waste = {
        key: 'waste',
        type: 'myquantity',
        templateOptions: {
            label: 'Amount of Waste',
        }
    }
    f.derivative_product = {
        key: 'derivative_product',
        type: 'myinput',
        templateOptions: {
            label: 'New Derivative Product Name',
        }
    }
    f.derivative_strain = {
        key: 'derivative_strain',
        type: 'myinput',
        templateOptions: {
            label: 'New Derivative Strain',
        }
    }
    f.derivative_quantity = {
        key: 'derivative_quantity',
        type: 'myinput',
        templateOptions: {
            label: 'New Derivative Quantity',
        }
    }
    f.derivative_type = {
        key: 'derivative_type',
        type: 'myselect',
        templateOptions: {
            // valueProp: 'id',
            labelProp: 'label',
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'New Derivative Type',
            placeholder: 'Select the type of inventory being created',
            options: inventorytypeinfoarray(),
        },
    }
    f.inventory_convert_remove_quantity = {
        key: 'remove_quantity',
        type: 'myquantitywithpercent',
        templateOptions: {
            label: 'Amount to Remove from Existing Lot',
        },
        controller: function ($scope, Data) {
            $scope.updatepercent = function () {
                if(typeof $scope.model.inventoryitem != "undefined") {
                    $scope.percent = parseFloat(parseFloat($scope.model.data.remove_quantity)/parseFloat($scope.model.inventoryitem.remaining_quantity)*100).toFixed(2)+ "% of " + $scope.model.inventoryitem.id
                }
            }
        }
    }
    f.schedule_zeros_for_destruction = {
        //     key: 'barcodeid',
        //     type: 'selectallwaste',
        //     templateOptions: {
        //         ngOptions: 'option as option in to.options | filter: $select.search',
        //         label: 'schedule',
        //         labelProp: 'inventorylabel',
        //         options: []
        //     },
        //     controller: /* @ngInject */ function($scope, ConnectService, Data) {
        //         $scope.selectallzeroes = function () {
        //             ConnectService.post({action: 'sync_inventory'}, fail, function (res) {
        //                 console.log(res);
        //                 var r = res.inventory;
        //                 var w = [];
        //                 var allbarcodes = []
        //                 var zeroes = []
        //                 r.map(function (option, index, object) {
        //                     // Remove Deleted
        //                     if (option.inventorystatus > 0 || option.deleted == 1 || option.remaining_quantity > 0.5 ) {
        //                         console.log('deleting deleted');
        //                         object.splice(index, 1);
        //                     }
        //                     else {
        //                         // Barcode
        //                         if (option.remaining_quantity == 0) {
        //                             zeroes.push(option.id)
        //                         }
        //                         allbarcodes.push(option.id);
        //                         option.datelabel = gettimestring(option.sessiontime);
        //                         if (typeof option.inventorystatus != "null") {
        //                             option.inventorystatuslabel = getinventorystatuslabel(option.inventorystatus)
        //                         } else {
        //                             option.inventorystatuslabel = "Not scheduled for transport or destruction";
        //                         }
        //                         option.inventorylabel = '[' + option.id + '] ';
        //                         // Inventory Type Info
        //                         var inventorytypeinfo = getinventorytypeinfo(option.inventorytype);
        //                         option.inventorytypelabel = inventorytypeinfo.label;
        //                         option.category = option.inventorytypelabel;
        //                         // Format weighable
        //                         if (!inventorytypeinfo.weighable) {
        //                             //(option.inventorytype === 28 || option.inventorytype === 24) {
        //                             option.inventorylabel += option.remaining_quantity + ' x ' + option.usable_weight + ' g';
        //                         } else {
        //                             option.inventorylabel += parseFloat(option.remaining_quantity).toFixed(2) + ' g';
        //                         }
        //                         // productname
        //                         if (!!option.productname) { option.inventorylabel += ' ' + option.productname; };
        //                         // Strain
        //                         if (!!option.strain) { option.inventorylabel += ' ' + option.strain; };
        //                         // Inventory Type Label
        //                         // option.inventorylabel += ' ' + inventorytypeinfo.label;
        //                         // Sample
        //                         if (option.is_sample === 1) {
        //                             option.inventorylabel += ' (Sample)';
        //                             // get sample results
        //                         }
        //                         // option.inventorylabel += ' (Waste)'
        //                         w.push(option);
        //                     }
        //                 });
        //                 // end map
        //                 console.log(w);
        //                 if (w.length === 0) {
        //                     $scope.to.disabled = true;
        //                     w.push({inventorylabel: "There are no inventory items with a quantity less than 0.5.", disabled: true})
        //                 }
        //                 if (zeroes.length > 0) {
        //                     mydata = []
        //                     zeroes.map (function (z) {
        //                         mydata.push({ barcodeid: z, quantity: 0.01, reason: 'Removing zero quantity inventory item', type: '1'})
        //                     })
        //                     ConnectService.post({action:'inventory_adjust', data: mydata}, fail, function () {
        //                         sortbykey(w, 'id');
        //                         $scope.model.barcodeid = allbarcodes;
        //                         // $scope.selectallwaste();
        //                         $scope.to.options = w;
        //                         return r;
        //                     })
        //                 } else {
        //                     sortbykey(w, 'id');
        //                     $scope.model.barcodeid = allbarcodes;
        //                     // $scope.selectallwaste();
        //                     $scope.to.options = w;
        //                     return r;
        //                 }
        //             });
        //         }
        //         $scope.selectallzeroes();
        //
        //     }
        // }
        // if (!Date.now) {
        //     Date.now = function() { return new Date().getTime(); }
        // }
        // function seventytwohourspassed (statustime) {
        //     var now = new Date()
        //     console.log(Math.floor(Date.now()/1000) + " vs " + statustime);
        //     // if (Math.floor(Date.now()/1000) + > statustime ) {
        //     if (Math.floor(Date.now()/1000) > statustime) {
        //         return true
        //     }
        //     return false;
    }

    f.waste_destroy = {
        key: 'inventoryitem',
        type: 'selectallwaste',
        // type: 'myselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'submit',
            placeholder: 'Select a waste item',
            // valueProp: 'id',
            labelProp: 'inventorylabel',
            options: []
        },
        controller: /* @ngInject */ function($scope, ConnectService, Data) {
            // and just use this area to format data for display in the given field
            $scope.to.loading = ConnectService.post({action: 'sync_inventory'}, fail, function (res) {
                console.log(res);
                var r = res.inventory;
                var w = [];
                var allbarcodes = []
                r.map(function (option, index, object) {
                    // Remove Deleted
                    if (option.deleted == 1 || option.inventorystatus != 1 || !seventytwohourspassed(option.inventorystatustime) ) {

                        console.log('deleting deleted');
                        object.splice(index, 1);
                    }
                    else {
                        // Barcode
                        allbarcodes.push(option.id);
                        option.datelabel = gettimestring(option.sessiontime);
                        if (typeof option.inventorystatus != "null") {
                            option.inventorystatuslabel = getinventorystatuslabel(option.inventorystatus)
                        } else {
                            option.inventorystatuslabel = "Not scheduled for transport or destruction";
                        }
                        option.inventorylabel = '[' + option.id + '] ';
                        // Inventory Type Info
                        var inventorytypeinfo = getinventorytypeinfo(option.inventorytype);
                        option.inventorytypelabel = inventorytypeinfo.label;
                        option.category = option.inventorytypelabel;
                        // Format weighable
                        if (!inventorytypeinfo.weighable) {
                            //(option.inventorytype === 28 || option.inventorytype === 24) {
                            option.inventorylabel += option.remaining_quantity + ' x ' + option.usable_weight + ' g';
                        } else {
                            option.inventorylabel += parseFloat(option.remaining_quantity).toFixed(2) + ' g';
                        }
                        // productname
                        if (!!option.productname) { option.inventorylabel += ' ' + option.productname; };
                        // Strain
                        if (!!option.strain) { option.inventorylabel += ' ' + option.strain; };
                        // Inventory Type Label
                        // option.inventorylabel += ' ' + inventorytypeinfo.label;
                        // Sample
                        if (option.is_sample === 1) {
                            option.inventorylabel += ' (Sample)';
                            // get sample results
                        }
                        // option.inventorylabel += ' (Waste)'
                        w.push(option);
                    }
                }); // end map
                console.log(w);
                if (w.length === 0) {
                    // $scope.to.disabled = true;
                    w.push({inventorylabel: "There is no waste ready to be destroyed", disabled: true})
                }
                sortbykey(w, 'id');
                $scope.model.barcodeid = allbarcodes;
                $scope.to.options = w;
                console.log("done?");
                return r;
            });
        }
    }
    // f.waste_destroy_schedule = {
    //     key: 'inventoryitem',
    //     type: 'selectallwaste',
    //     templateOptions: {
    //         ngOptions: 'option as option in to.options | filter: $select.search',
    //         label: 'schedule',
    //         placeholder: 'Select a waste item',
    //         valueProp: 'id',
    //         labelProp: 'inventorylabel',
    //         options: []
    //     },
    //     controller: /* @ngInject */ function($scope, ConnectService, Data) {
    //         //TODO: don't use connectservice
    //         $scope.to.loading = ConnectService.post({action: 'sync_inventory'}, fail, function (res) {
    //             console.log('sync_inventory')
    //             console.log(res);
    //             var r = res.inventory;
    //             var w = [];
    //             var allbarcodes = []
    //             r.map(function (option, index, object) {
    //                 // Remove Deleted
    //                 if (option.inventorytype != 27 || option.deleted == 1 || !!option.inventorystatus) {
    //                     console.log('deleting deleted');
    //                     object.splice(index, 1);
    //                 }
    //                 else {
    //                     // Barcode
    //                     allbarcodes.push(option.id);
    //                     option.datelabel = gettimestring(option.sessiontime);
    //                     if (typeof option.inventorystatus != "null") {
    //                         option.inventorystatuslabel = getinventorystatuslabel(option.inventorystatus)
    //                     } else {
    //                         option.inventorystatuslabel = "Not scheduled for transport or destruction";
    //                     }
    //                     option.inventorylabel = '[' + option.id + '] ';
    //                     // Inventory Type Info
    //                     var inventorytypeinfo = getinventorytypeinfo(option.inventorytype);
    //                     option.inventorytypelabel = inventorytypeinfo.label;
    //                     option.category = option.inventorytypelabel;
    //                     // Format weighable
    //                     if (!inventorytypeinfo.weighable) {
    //                         //(option.inventorytype === 28 || option.inventorytype === 24) {
    //                         option.inventorylabel += option.remaining_quantity + ' x ' + option.usable_weight + ' g';
    //                     } else {
    //                         option.inventorylabel += parseFloat(option.remaining_quantity).toFixed(2) + ' g';
    //                     }
    //                     // productname
    //                     if (!!option.productname) { option.inventorylabel += ' ' + option.productname; };
    //                     // Strain
    //                     if (!!option.strain) { option.inventorylabel += ' ' + option.strain; };
    //
    //                     // Sample
    //                     if (option.is_sample === 1) {
    //                         option.inventorylabel += ' (Sample)';
    //                     }
    //                     option.inventorylabel += ' (Waste)'
    //                     w.push(option);
    //                 }
    //             }); // end map
    //             console.log(w);
    //             if (w.length === 0) {
    //                 $scope.to.disabled = true;
    //                 w.push({inventorylabel: "There is no waste to be scheduled. You run a clean shop.", disabled: true})
    //             }
    //             sortbykey(w, 'id');
    //             $scope.model.barcodeid = allbarcodes;
    //             $scope.to.options = w;
    //             return r;
    //         });
    //     }
    // };
    f.reason_type_for_schedule_for_destruction = {
        key: 'reason_extended',
        type: 'myselect',
        templateOptions: {
            label: 'Reason for Destruction',
            placeholder: 'Select a reason for destruction',
            options: [
                {id: 1, title: 'Waste'},
                {id: 2, title: 'Unhealthy or Dead'},
                {id: 3, title: 'Infestation'},
                {id: 4, title: 'Product Return'},
                {id: 5, title: 'Mistake'},
                {id: 6, title: 'Spoilage'},
                {id: 7, title: 'Quality Control'},
            ],
            valueProp: 'id',
            labelProp: 'title',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',


        }
    };
    f.reason_desc_for_schedule_for_destruction = {
        key: 'reason',
        type: 'myinput',
        templateOptions: {
            label: 'Description',
        }
    };

    function getinventorystatuslabel (inventorystatus) {
        var statusmap = {
            1: "Scheduled for Destruction",
            2: "Scheduled for Transport",
            3: "In Transport",
        }
        return statusmap[inventorystatus];
    }
    function getviewfields (viewtype) {
        v = [];
        if (viewtype==="inventorytypes") {

        }
        if (viewtype === "inventoryitem") {
            v.push({label: "ID", value: "id", isbarcode: true})
            v.push({label: "Type", value: "inventorytypelabel"})
            v.push({label: "Remaining Quantity", value: "remaining_quantity"})
            v.push({label: "Usable Weight", value: "usable_weight"})
            v.push({label: "Last Modified", value: "datelabel"})
            v.push({label: "Product Name", value: "productname"})
            v.push({label: "Inventory Status", value: "inventorystatuslabel"})
            v.push({label: "Moisture", value: "moisture"})
            v.push({label: "THCA", value: "thca"})
            v.push({label: "THC", value: "thc"})
            v.push({label: "CBD", value: "cbd"})
            v.push({label: "Total Cannabinoids", value: "totalcann"})
            v.push({label: "Stems", value: "stems"})
            v.push({label: "Other", value: "other"})
            v.push({label: "E. Coli and Salmonela", value: "e_coli_and_salmonella"})
            v.push({label: "Bile Tolerant", value: "bile_tolerant"})
            v.push({label: "Coliforms", value: "coliforms"})
            v.push({label: "Aerobic Bacteria", value: "aerobic_bacteria"})
            v.push({label: "Yeast and Mold", value: "yeast_and_mold"})
        }
        return v;
    }

    f.view_inventory = {
        key: 'inventoryitem',
        type: 'myselect',
        templateOptions: {
            ngOptions: 'option as option in to.options | filter: $select.search',
            label: 'Inventory Item',
            placeholder: 'Inventory Item',
            valueProp: 'id',
            labelProp: 'inventorylabel',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {
            // console.log('');
            // $scope.to.options = Data.formatted.inventory'))
            // $scope.to.options = Data.formatted.getInventory().inventoryarray
            $scope.to.options = Data.formatted.inventory.inventoryarray
            console.log($scope.to.options);
        }
    }
    f.view_inventory_data_id = angular.copy(f.view_inventory)
    f.view_inventory_data_id.key = 'data.barcodeid'

    f.select_inventory_multiple = angular.copy(f.view_inventory)
    f.select_inventory_multiple.key = 'inventoryitems'
    f.select_inventory_multiple.type = 'mymultipleselect'
    f.select_inventory_multiple.templateOptions.placeholder +='s'
    f.select_inventory_multiple.templateOptions.label +='s'

    f.inventory_barcodeid_select_data = angular.copy(f.view_inventory);
    f.inventory_barcodeid_select_data.key = 'data.barcodeid';
    f.inventory_barcodeid_select_data.templateOptions.ngOptions = 'option[to.valueProp] as option in to.options | filter: $select.search'

    f.items_to_schedule_for_destruction = angular.copy(f.view_inventory);
    f.items_to_schedule_for_destruction.key = 'barcodeid';
    f.items_to_schedule_for_destruction.type = 'mymultipleselect';
    f.items_to_schedule_for_destruction.templateOptions.ngOptions = 'option[to.valueProp] as option in to.options | filter: $select.search',
    //
    // f.inventory_barcodeid_select_data_multiple = angular.copy(f.inventory_barcodeid_select_data);
    // f.inventory_barcodeid_select_data_multiple.type = 'mymultipleselect';

    f.manifest_vendor_license = {
        key: 'vendor_license',
        type: 'myselect',
        templateOptions: {
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            placeholder: 'Recipient',
            label: 'Recipient',
            labelProp: 'label',
            valueProp: 'license',
            options: []
        },
        controller: /* @ngInject */ function ($scope, Data) {

            // var v = JSON.parse(localStorage.vendors).vendorsarray
            // console.log(JSON.parse(localStorage.vendors).vendorsarray);
            // console.log(localStorage.vendors);
            $scope.to.options = Data.formatted.vendors.vendorsarray.map(function(vendor) {
                return {name: vendor.name, label: vendor.label, license: vendor.location}
            })
            //try this
            // var v = Data.formatted.vendors.vendorsarray.map(function(vendor) {
            //     return {name: vendor.name, label: vendor.display.slimlabel, license: vendor.location}
            // })


            // $scope.to.options =
        }
    };

    f.manifest_approximate_departure = {
        key: 'approximate_departure',
        type: 'mydatetime',
        templateOptions: {
            label: 'Date and Time of Departure',
        },
    }
    f.manifest_approximate_arrival = {
        key: 'approximate_arrival',
        type: 'mydatetime',
        templateOptions: {
            label: 'Date and Time of Arrival',
            labelProp: 'label',
        },
    }
    f.transfers_view_inbound = {
        key: 'transfer',
        // type: 'myselect',
        type: 'mymultipleselect',
        templateOptions: {
            ngOptions: 'option in to.options | filter: $select.search',
            label: 'Inbound Transfer',
            labelProp: 'label',
            options: []
        },
        // TODO: CLEAN THIS UP !
        controller: /* @ngInject */ function($scope,  $rootScope) {
            $scope.to.loading = ConnectService.post({action: 'sync_inventory_transfer_inbound'}, fail, function (transferres) {
                console.log('sync_inventory_transfer_inbound')
                console.log(transferres);
                // ConnectService.post({action: 'sync_manifest'}, fail, function (manifestres) {
                // var manifests = aggregatemanifests(manifestres)
                var transfers = transferres.inventory_transfer_inbound;
                transfers.map( function (fer) {
                    fer.vendor = $rootScope.vendors.vendorsbyid[fer.outbound_license];
                    fer.timelabel = gettimestring(fer.sessiontime);
                    fer.inventorytypelabel = getinventorytypeinfo(fer.inventorytype).label
                    var ppu = parseFloat(fer.price) / parseInt(fer.quantity)
                    if (Math.round(ppu) != ppu) {
                        ppu = ppu.toFixed(2);
                    }
                    fer.priceperunit = '$' + ppu
                    fer.label = ''
                    + '['+ fer.inventoryid +'] '
                    + fer.timelabel + ' '
                    + parseFloat(fer.quantity).toFixed(2) +' x '
                    + fer.strain  + ' ('
                    + getinventorytypeinfo(fer.inventorytype).label
                    + ') from '  + fer.vendor.name
                    + ' ($' + fer.price + ') '
                });
                console.log('transfers');
                console.log(transfers);
                sortbykey(transfers, 'sessiontime');
                $scope.to.options = transfers;
                // });
                //    console.log(res);
                // var transfers = []

                // TODO: sort desc by date

                //return ;
            });
        }
    };


    f.manifest_view = {
        key: 'manifests',
        // type: 'myselect',
        type: 'mymultipleselect',
        templateOptions: {
            ngOptions: 'option in to.options | filter: $select.search',
            label: 'Manifests',
            placeholder: 'Select one or more manifests',
            valueProp: 'manifestid',
            labelProp: 'label',
            options: []
        },
        controller: /* @ngInject */ function($scope, ConnectService, Data) {
            $scope.to.loading = ConnectService.post({action: 'sync_inventory_transfer'}, fail, function (transferres) {
                console.log('sync_inventory_transfer')
                ConnectService.post({action: 'sync_manifest'}, fail, function (manifestres) {
                    var manifests = aggregatemanifests(manifestres)
                    var transfers = transferres.inventory_transfer;
                    manifests.map( function (fest) {
                        fest.totalprice = 0;
                        transfers.map( function (fer) {
                            if (fest.manifestid === fer.manifestid) {
                                if (typeof fest.transfers === 'undefined') {
                                    fest.transfers = [];
                                }
                                fest.transfers.push(fer)
                                fest.totalprice += parseInt(fer.price)
                                fest.stops.map( function (stop) {
                                    stop.items.map(function (item) {
                                        if (item.inventoryid === fer.inventoryid) {
                                            if (Math.round(fer.price) != fer.price) {
                                                fer.price = parseFloat(fer.price).toFixed(2);
                                            }
                                            item.price = '$' + parseFloat(fer.price).toFixed(2);
                                            var ppu = parseFloat(fer.price) / parseInt(item.quantity)
                                            if (Math.round(ppu) != ppu) {
                                                ppu = ppu.toFixed(2);
                                            }
                                            item.priceperunit = '$' + ppu
                                        }
                                    })
                                })
                            }
                        })
                        fest.label += ''
                        fest.label += ' ($' + fest.totalprice + ')'
                    })

                    sortbykey(manifests, 'sessiontime');
                    $scope.to.options = manifests;
                });
                //    console.log(res);
                // var transfers = []

                // TODO: sort desc by date

                //return ;
            });

            // function getinventorytypeinfo (typeid) {
            //     var typemap = {
            //         5: {label:'Kief', weighable:true},
            //     }
            //     return typemap[typeid];
            // }
        }
    };
    function removedeleted (r) {
        if (!r) return
        for(var i = r.length - 1; i >= 0; i--) {
            if(r[i].deleted != 0) {
                r.splice(i, 1);
            }
        }
        return r;
    }


    function fail (res) {
        console.log("+ " + res.error);
        alert = $mdDialog.alert({
            title: 'Error! WSLCB Traceability says: ',
            content: res.error,
            ok: 'Close'
        });
        $mdDialog
        .show( alert )
        .finally(function() {
            alert = undefined;
            console.log(res.error);
            if (res.error == "Your session has expired.") {
                console.log('res.error!!!');
                $location.path('/login');
            }
        });
    }

    function sortbykey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
    }
    // f.manifest = {}
    f.inventorybarcodeid = {
        key: 'barcodeid',
        // type: 'ui-select',
        type: 'myselect',
        templateOptions: {
            // optionsAttr: 'bs-options',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Inventory Item',
            // placeholder: 'Select an inventory item',
            valueProp: 'id',
            labelProp: 'inventorylabel',
            options: []
            // placeholder: 'Select an Inventory Item',
            // defaultValue: {inventorylabel:'Select an Inventory Item', id: ''}
        },
        // type: 'select', // change to select, async sync_inventory
        // templateOptions: {
        //     label: 'Barcode ID',
        //     options: [],
        //     labelProp: 'inventorylabel',
        // },
        controller: /* @ngInject */ function($scope, ConnectService, Data) {
            // so rather than getting data from the server, I want to have already done that
            // and just use this area to format data for display in the given field
            $scope.to.loading = ConnectService.post({action: 'sync_inventory'}, fail, function (res) {
                console.log('sync_inventory')
                console.log(res);
                var r = res.inventory;
                var allbarcodes = []
                r.map(function (option, index, object) {
                    allbarcodes.push(option.id);
                    // Remove Deleted
                    if (option.deleted == 1) {
                        console.log('deleting deleted');
                        object.splice(index, 1);
                    } else {
                        // Barcode
                        option.inventorylabel = '[' + option.id + '] ';
                        // Inventory Type Info
                        var inventorytypeinfo = getinventorytypeinfo(option.inventorytype);
                        // Format weighable
                        if (!inventorytypeinfo.weighable) {
                            //(option.inventorytype === 28 || option.inventorytype === 24) {
                            option.inventorylabel += option.remaining_quantity + ' x ' + option.usable_weight + ' g';
                        } else {
                            option.inventorylabel += parseFloat(option.remaining_quantity).toFixed(2) + ' g';
                        }
                        // productname
                        if (!!option.productname) { option.inventorylabel += ' ' + option.productname; };
                        // Strain
                        if (!!option.strain) { option.inventorylabel += ' ' + option.strain; };
                        // Inventory Type Label
                        option.inventorylabel += ' ' + inventorytypeinfo.label;
                        // Sample
                        if (option.is_sample === 1) {
                            option.inventorylabel += ' (sample)';
                            // get sample results
                        }
                    }
                }); // end map
                //{action:'inventory_qa_check', barcodeid: option.id}
                var qapassedrequest = {
                    action: 'inventory_qa_check_all',
                    barcodeid: allbarcodes
                }
                ConnectService.post(qapassedrequest, fail, function (qares) {
                    var qa = qares.data;
                    r.map(function (option) {
                        qa.map(function (qao) {
                            if (qao.barcode_id === option.id) {
                                if (qao.result === 1) {
                                    console.log('passed');
                                    option.inventorylabel += ' (QA Passed)'
                                } else if (qao.result === -1) {
                                    option.inventorylabel += ' (QA Rejected)'
                                }
                            }
                        })
                    })

                    sortbykey(r, 'id');
                    $scope.to.options = r;
                    // console.log(r);
                })
                //$scope.to.ngOptions = 'option.id for option in r'
                // ngOptions : 'option.id group by option.inventorytype for option in options',
                // ngOptions = 'option[to.valueProp] as option in to.options | filter: $select.search';

                // note, the line above is shorthand for:
                // $scope.options.templateOptions.options = data;
                return r;
            });
        }
    };
    f.inventorybarcodeiddata = angular.copy(f.inventorybarcodeid);
    f.inventorybarcodeiddata.key = 'data.barcodeid';

    f.manifest_barcodeid = angular.copy(f.view_inventory);
    f.manifest_barcodeid.key = 'stop_overview.barcodeid';
    f.manifest_barcodeid.type = 'mymultipleselect';
    f.manifest_barcodeid.templateOptions.placeholder = 'Select One or More Inventory Items'
    f.manifest_barcodeid.templateOptions.label = 'Inventory Items'


    f.quantity = {
        key: 'quantity',
        type: 'myquantity', // change to select, async sync_inventory
        templateOptions: {
            // placeholder: 'Enter a new quantity',
            label: 'New Quantity',
            showuom: true
        }
    };
    // f.dataquantity = angular.copy(f.quantity);
    // f.dataquantity.key = 'data.quantity';


    // f.dataquantity_uom =
    // {
    //     key: 'select2Option',
    //     type: 'select',
    //     templateOptions: {
    //         optionsAttr: 'bs-options',
    //         ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
    //         label: 'Single Select (select2)',
    //         valueProp: 'id',
    //         labelProp: 'label',
    //         placeholder: 'Select option',
    //         options: testData
    //     }
    // };
    // f.dataquantity_uom =
    // {
    //     key: 'data.quantity_uom',
    //     type: 'input', // change to select, async sync_inventory
    //     templateOptions: {
    //         label: 'uom',
    //         // placeholder: ''
    //     }
    // };
    f.enter_adjust_reason = {
        key: 'adjust_reason',
        type: 'myinput',
        templateOptions: {
            label: 'Reason For Change',
        }
    };
    f.select_adjust_type = {
        key: 'adjust_type',
        type: 'myselect',
        templateOptions: {
            label: 'Adjustment Type',
            placeholder: 'Select an adjustment type',
            options: [
                {id: 1, title: 'General Inventory Audit'},
                {id: 2, title: 'Theft'},
                {id: 3, title: 'Seizure by Law Enforcement'},
                {id: 4, title: 'Correcting a Mistake'},
                {id: 5, title: 'Moisture Loss'},
                {id: 6, title: 'Depletion'},
            ],
            valueProp: 'id',
            labelProp: 'title',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',


        }
    };
    function gettypemap () {
        var typemap = {
            5: {label:'Kief', weighable:true},
            6: {label: 'Flower', weighable:true},
            7: {label: 'Clone', weighable: true},
            9: {label: 'Other Plant Material (stems, leaves, etc to be processed)', weighable: true},
            10: {label: 'Seed', weighable: true},
            11: {label: 'Plant Tissue', weighable: true},
            12: {label: 'Mature Plant', weighable: true},
            13: {label: 'Flower Lot', weighable: true},
            14: {label: 'Other Plant Material Lot', weighable: true},
            15: {label: 'Bubble Hash', weighable: true},
            16: {label: 'Hash', weighable: true},
            17: {label: 'Hydrocarbon Wax', weighable: true},
            18: {label: 'CO2 Hash Oil', weighable: true},
            19: {label: 'Food Grade Solvent Extract', weighable: true},
            20: {label: 'Infused Dairy Butter or Fat in Solid Form', weighable: true},
            21: {label: 'Infused Cooking Oil', weighable: true},
            22: {label: 'Solid Marijuana Infused Edible', weighable: false},
            23: {label: 'Liquid Marijuana Infused Edible', weighable: false},
            24: {label: 'Marijuana Extract for Inhalation', weighable: false},
            25: {label: 'Marijuana Infused Topicals', weighable: false},
            26: {label: 'Sample Jar', weighable: false},
            27: {label: 'Waste', weighable: true},
            28: {label: 'Usable Marijuana', weighable: false},
            29: {label: 'Wet Flower', weighable: true},
            30: {label: 'Marijuana Mix', weighable: true},
            31: {label: 'Marijuana Mix Packaged', weighable: false},
            32: {label: 'Marijuana Mix Infused', weighable: false}
        }
        return typemap;
    }
    // function invtypeinfoarray() {
    //     var a = inventorytypeinfoarray()
    //     a.map( function(type) {
    //         type.weighable = getinventorytypeinfo(type.id).weighable
    //     })
    //     console.log(a);
    //     return a
    // }
    function inventorytypeinfoarray () {
        var infoarray = [
            {
                'label': 'Kief',
                'id': '5',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Flower',
                'id': '6',
                'category': 'Plant',
                convertable: true
            },
            {
                'label': 'Clone',
                'category': 'Plant',
                'id': '7'
            },
            {
                'label': 'Other Plant Material',
                'category': 'Plant',
                'id': '9',
                convertable: true
            },
            {
                'label': 'Seed',
                'category': 'Plant',
                'id': '10'
            },
            {
                'label': 'Plant Tissue',
                'category': 'Plant',
                'id': '11'
            },
            {
                'label': 'Mature Plant',
                'category': 'Plant',
                'id': '12'
            },
            {
                'label': 'Flower Lot',
                'category': 'Plant',
                convertable:true,
                'id': '13'
            },
            {
                'label': 'Other Plant Material Lot',
                'category': 'Plant',
                'id': '14',
                convertable: true
            },
            {
                'label': 'Bubble Hash',
                'id': '15',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Hash',
                'id': '16',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Hydrocarbon Wax',
                'id': '17',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'CO2 Hash Oil',
                'id': '18',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Food Grade Solvent Extract',
                'id': '19',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Infused Dairy Butter or Fat in Solid Form',
                'id': '20',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Infused Cooking Oil',
                'id': '21',
                'category': 'Intermediate Product (for QA testing)',
                derivative: true
            },
            {
                'label': 'Solid Marijuana Infused Edible',
                'id': '22',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Liquid Marijuana Infused Edible',
                'id': '23',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Marijuana Extract for Inhalation',
                'id': '24',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Marijuana Infused Topicals',
                'id': '25',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Sample Jar',
                'id': '26',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Waste',
                'id': '27',
                'category': 'Waste',
                waste: true
            },
            {
                'label': 'Usable Marijuana',
                'id': '28',
                'category': 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Wet Flower',
                'id': '29',
                'category': 'Plant',
            },
            {
                'label': 'Marijuana Mix (Shake & Trim)',
                'category': 'Intermediate Product (for QA testing)',
                'id': '30',
                derivative: true
            },
            {
                'label': 'Packaged Marijuana Mix (Shake & Trim)',
                'id': '31',
                category: 'End Product (for sale)',
                derivative: true
            },
            {
                'label': 'Infused Marijuana Mix (Shake & Trim)',
                'id': '32',
                category: 'End Product (for sale)',
                derivative: true
            }, ];
            infoarray.map( function(type) {
                type.weighable = getinventorytypeinfo(type.id).weighable
            })
            return infoarray
        }
        function getinventorytypeinfo (typeid) {
            var typemap = gettypemap();
            return typemap[typeid];
        }

        function gettimestring (unixtime) {
            // console.log(unixtime);
            return new Date(unixtime * 1000).toLocaleString();
            // return unixtime *
        }
        function getdatestringfor (unixtime) {
            // console.log(unixtime);
            return new Date(unixtime * 1000).toLocaleDateString();
            // return unixtime *
        }
        function fielddata (field) {
            // define each input using an object creator function
            // return an array of inputs based on action
            // console.log('fielddata!');
            // console.log(f);
            // console.log(f[field]);
            return f[field];
            //return f.databarcodeid;
        }

        return {
            fielddata: fielddata,
            f: f
        };
    };
})();
