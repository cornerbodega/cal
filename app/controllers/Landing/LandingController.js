(function(){
  angular
    .module('myApp')
    .controller('LandingController', ['$location', 'ConnectService',
      LandingController
    ]);

  function LandingController($location, ConnectService) {
    var vm = this;
    vm.signIn = function () {
        // console.log('in!!');
        ConnectService.signIn({username: vm.username, password: vm.password}, signInFail, signInSucceed)
    }
    vm.signUp = function () {
        ConnectService.signUp({username: vm.username, password: vm.password, license: vm.ubi}, signUpFail, signUpSucceed)
    }
    function signUpFail(res) {
        console.log('Sign Up Failed ' + res);
    }
    function signInFail(res) {
        console.log('Sign In Failed ' + res);
    }
    function signUpSucceed(res) {
        $location.path('/market')
    }
    function signInSucceed(res) {
        $location.path('/market')
    }
  }

})();
