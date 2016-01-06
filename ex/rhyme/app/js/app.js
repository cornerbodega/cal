'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    // 'ui.router',
    'ngRoute',
    // 'formly',
    // 'formlyBootstrap',
    // 'ui.select',
    // 'ngSanitize',
    // 'ngAnimate',
    // 'angular-loading-bar',
    // 'ngMaterial',
    // 'rzModule',
    // 'ui.bootstrap',
    // 'uiGmapgoogle-maps',
    // 'smart-table',
    // 'myApp.view1',
    // 'myApp.view2',
    // 'myApp.login',
    // 'myApp.version'
])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:  'views/rhyme.view.html',
        controller:   'RhymeController',
        controllerAs: 'vm',
        // resolve: { VendorsPrepService: VendorsPrepService }
    })
    .otherwise({
        redirectTo: '/'
    });
})

});
