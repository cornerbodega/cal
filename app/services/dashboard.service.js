
angular
.module('myApp')
.factory('DashboardService', ['$location', 'ConnectService', '$rootScope', 'DynamicStaticDataService',
DashboardService
]);

function DashboardService($location, ConnectService, $rootScope, DynamicStaticDataService) {
    console.log($rootScope);
    var vm = this;
    function getCategories() {
        // var path = $location.path()
            return [
                {
                    label: 'Plants',
                    id: 'plants',
                    icon: 'fa-leaf',
                },
                {
                    label: 'Inventory',
                    id: 'inventory',
                    icon: 'fa-barcode'

                },
                {
                    label: 'QA Labs',
                    id: 'qa_lab',
                    background: 'red',
                    icon: 'fa-graduation-cap',
                },
                {
                    label: 'Marketplace',
                    id: 'market',
                    background: 'purple',
                    icon: 'fa-exchange',
                },
                {
                    label: 'Vendors',
                    id: 'vendors',
                    background: 'lightPurple',
                    icon: 'fa-industry',
                },
                {
                    label: 'Rooms',
                    id: 'rooms',
                    icon: 'fa-object-group',
                    background: 'pink',
                },
                {
                    label: 'Employees',
                    id: 'employees',
                    icon: 'fa-users',
                    background: 'deepBlue',
                },
                {
                    label: 'Vehicles',
                    id: 'vehicles',
                    icon: 'fa-car',
                    background: 'yellow',
                },
                {
                    label: 'Sales',
                    id: 'sales',
                    background: 'green',
                    icon: 'fa-line-chart',
                },
                {
                    label: 'Tax Report',
                    id: 'tax_report',
                    icon: 'fa-meh-o',
                    background: 'gray',
                },
                // {
                //     label: 'History',
                //     id: 'history',
                //     icon: 'fa-history',
                //     background: 'deep-purple',
                // },
            ];
    }

    function execute(model) {
        console.log(model);
        var path = '/traceability/' + model.action;
        $location.path(path);
        console.log('execute ' + path);
    }

    function f (res) {
        console.log('Error! ' + res.error);
    }

    function s (res) {
        console.log('Success!! ' + res);
    }

    function fields () {
        return [
            {
                key: 'action',
                type: 'mydashboard',
                templateOptions: {
                    label: 'Go To',
                    placeholder: 'Select a category',
                    options: getCategories(),
                    valueProp: 'id',
                    labelProp: 'label',
                    ngOptions: 'option[to.valueProp] as option in to.options',
                    controller:  /* @ngInject */ function ($scope) {
                        $scope.selectdashboardoption = function (category) {
                            console.log(category);
                            execute({action:category});
                        }
                    }

                }
            }
        ];
    };
    return {
        fields : fields,
        title: 'Dashboard',
    }
}
