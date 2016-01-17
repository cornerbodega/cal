(function(){
  angular
    .module('myApp')
    .controller('LandingController', ['$location', 'ConnectService',
      LandingController
    ]);

  function LandingController($location, ConnectService) {
    var vm = this;
    var formData = {}
    vm.signIn = function () {

        // firebase Account sign in
        // -> then lcb login with stored info.
        // -> if it doesn't work, deny access.

        // var potnetdb = ref.child('potnet')
        // potnetdb.set({testkey1: 3, testkey2: 4})
        // // $firebaseObject(ref)
        // console.log(ref);
        // ConnectService.signIn({username: vm.username, password: vm.password}, signInFail, signInSucceed)
    }
    vm.signUp = function () {
        // check if if ubi/un exists in users
        // if new, try to log in at wsclb with info
        // if successful, create firebase ACCOUNT with username password ->
            // associated with email password ubi
        // user wbat log in to potnet with username password. do this automatically.

        // ConnectService.signUp({username: vm.username, password: vm.password, license: vm.ubi}, signUpFail, signUpSucceed)
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
