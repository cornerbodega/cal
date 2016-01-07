(function(){
    angular
    .module('myApp')

    // .directive('mySearch', function($location) {
    //     return {
    //         restrict: 'E',
    //         templateUrl: 'directives/templates/mySearch.html',
    //         // link: function ($scope, $element, $attrs) {
    //         // }
    //     }
    // })
    .directive('printBarcode', function () {
        return {
            restrict: 'EA',
            scope: {
                barcode: '=',
                desc: '='
            },
            template: '<a ng-click="print()">[Print Barcode]</a>',
                link: function (scope, element, attrs) {

                scope.print = function () {
                    // console.log('PRINT IT!!!!');

                    console.log(scope.desc);
                    window.open('http://marvin.technology/fast502/paris/nepal/app/#/print_id/'+scope.barcode+'/'+scope.desc,'_blank');
                }
            }
        }
    })
    .directive('myViewVendorsTable', function ($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'views/tables/view-vendors-table.html',
            link: function (scope, element, attrs) {
                scope.vm.vendors = $rootScope.vendors.vendorsarray
                console.log($rootScope);
                // console.log(scope.vm.vendors);
            }
        }
    })
    // .directive('myViewVendorsMap', function (uiGmapGoogleMapApi, $rootScope) {
    //     return {
    //         restrict: 'E',
    //         templateUrl: 'views/map/vendors-map.html',
    //         link: function (scope, element, attrs) {
    //             scope.map = { control:{}, center: {"latitude":47.63600561021653,"longitude":-120.41270065307617}, zoom: 6 };
    //             // var markers = []
    //             scope.markerclicked = function () {
    //                 console.log('you clicked a marker. good job!');
    //             }
    //             // console.log(scope.vm.filteredmarkers);
    //             // scope.$watch('scope.vm.filteredmarkers', function (newValue, oldValue) {
    //             //     console.log(newValue);
    //             //     console.log(oldValue);
    //             // })
    //             scope.searchkeyed = function () {
    //                 console.log('Searched! Changed!!!!');
    //                 // $filter('filter')(vm.vendors, vm.search)
    //             }
    //             // console.log(scope.vm.markers);
    //
    //             scope.showinfo = function (marker) {
    //                 var infowindow = new google.maps.InfoWindow({
    //                     content: 'contentString'
    //                 })
    //             }
    //
    //             scope.vm.markers = []
    //             scope.addmarkers = function () {
    //                 // scope.vm.filteredmarkers = angular.copy(scope.vm.markers)
    //                 uiGmapGoogleMapApi.then( function (maps) {
    //                     var n = 0
    //                     console.log($rootScope.vendors);
    //                     $rootScope.vendors.vendorsarray.map( function (vendor) {
    //                         n++;
    //                         if (typeof vendor.coords === "undefined") console.log('bad vendor  ' + vendor.name);
    //                         else scope.vm.markers.push({id:n, coords: vendor.coords, name: vendor.name, type: vendor.type})
    //                     })
    //
    //                 });
    //             }
    //             scope.addmarkers()
    //         }
    //     }
    // })
    .directive('myMenuBar', function ($location, $rootScope, $window, TaskService) {
        return {
            restrict: 'E',
            templateUrl: 'views/nav/my.menu.bar.html',
            link: function ($scope, $element, $attrs) {
                // var path = $location.path().slice(1);

                // console.log(scope.navtitle);

                // $scope.user = $rootScope.user
                var path = $location.path().slice(1);
                // $scope.title = path.charAt(0).toUpperCase() + path.slice(1);
                $scope.title  = path.split('/')
                if($location.path() != '/login') $scope.email = JSON.parse(sessionStorage.user).email
                $scope.gotoHelp = function() {
                    $location.path('/traceability/help')
                }
                $scope.breadcrumbs = $scope.title.map(function(title) {
                    return TaskService.tasksbyid[title]
                })
                console.log($scope.breadcrumbs);
                // $scope.title = 'potnet dotnet'
                // if ($scope.title === 'Inventory/view_inventory') {
                //     $scope.title = "View Inventory"
                // }
                if ($location.path() === '/login') {
                    $scope.hideSignout = true
                    $scope.hideFeedback = true
                    $scope.hideSignup = false
                    $scope.email = ""

                } else {
                    $scope.hideSignout = false
                    $scope.hideFeedback = false
                    $scope.hideSignup = true

                }

                $scope.toHistory = function () {
                    $location.path('/traceability/history')
                }
                $scope.toDashboard = function () {
                    $location.path('/traceability')
                }
                $scope.gotoLogin = function () {
                    $location.path('/login')
                }
                $scope.showback = true
                if (path === 'traceability' || path === "login") {
                    $scope.showback = false
                }
                $scope.back = function () {
                    // element.on('click', function() {
                        $window.history.back();
                    // });
                }
            }
        }
    })
    .directive('viewInventoryItem', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'views/tables/view-inventory-item.html'
        }
    })
    .directive('transferTable', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'views/tables/view-transfer-table.html'
        }
    })
    .directive('myDateTimeSelector', ['$sce', function ($sce) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) {
                    console.log('Error! No ngModel!');
                    return;
                }
                element.datetimepicker();
                element.on('blur', function () {
                    scope.dateTime = new Date(element.data("DateTimePicker").date().format());
                    console.log(scope.dateTime);
                    ngModel.$setViewValue(scope.dateTime);
                    scope.$digest();
                });

                console.log('mydatetimeselector!!');

            }
        }
    }])
    .directive('myBarcode', function () {
        return {
            restrict: 'EA',
            scope: {
                barcode: '='
            },
            template: '<canvas></canvas>',
            link: function (scope, element, attrs) {
                // console.log('I really know what Im doing');
                // console.log(element.JsBarcode("Hi"));
                canvas = element.find('canvas');
                // console.log(scope.);
                console.log('barcode:');
                console.log(scope.barcode);
                JsBarcode(canvas[0], scope.barcode, {width:1, height:60});
                // element.JsBarcode("Hi");
                // element.replaceWith(element.JsBarcode("Hi"));
            }
        }
    })
    .directive('manifestTable', function ($compile) {
        // console.log('MY TABLE!!!');
        return {
            restrict: 'E',
            templateUrl: 'views/tables/view-manifest-table.html',
            link: function (scope, element, attrs) {
                // console.log(scope.vm.vendors);
                scope.toggleshow = function (manifest) {
                    console.log(manifest);
                    manifest.show = !manifest.show
                }
                scope.searching = function () {
                    // console.log($scope.manifests);
                    scope.manifests.map (function (m) {
                        m.show = true
                    })
                }
            }
        }
    })












    // WORKS
    //   .directive('barsChart', function ($parse) {
    //   //explicitly creating a directive definition variable
    //   //this may look verbose but is good for clarification purposes
    //   //in real life you'd want to simply return the object {...}
    //   var directiveDefinitionObject = {
    //       //We restrict its use to an element
    //       //as usually  <bars-chart> is semantically
    //       //more understandable
    //       restrict: 'E',
    //       //this is important,
    //       //we don't want to overwrite our directive declaration
    //       //in the HTML mark-up
    //       replace: false,
    //       //our data source would be an array
    //       //passed thru chart-data attribute
    //       scope: {data: '=chartData'},
    //       link: function (scope, element, attrs) {
    //         //in D3, any selection[0] contains the group
    //         //selection[0][0] is the DOM node
    //         //but we won't need that this time
    //         var chart = d3.select(element[0]);
    //         //to our original directive markup bars-chart
    //         //we add a div with out chart stling and bind each
    //         //data entry to the chart
    //          chart.append("div").attr("class", "chart")
    //           .selectAll('div')
    //           .data(scope.data).enter().append("div")
    //           .transition().ease("elastic")
    //           .style("width", function(d) { return d + "%"; })
    //           .text(function(d) { return d + "%"; });
    //         //a little of magic: setting it's width based
    //         //on the data value (d)
    //         //and text all with a smooth transition
    //       }
    //    };
    //    return directiveDefinitionObject;
    // });
    //
})();
