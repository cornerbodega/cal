(function(){
  angular
    .module('myApp')
    .controller('LoginController', ['LoginService', 'ConnectService', '$location', 'Data',
      LoginController
    ]);

  function LoginController(LoginService, ConnectService, $location, Data) {
    var vm = this;
    console.log('login please!')
    //
    // if (sessionStorage.sessionid != 'undefined' && typeof sessionStorage.sessionid !='undefined') {
    //   $location.path('/dashboard');
    // }
    // vm.showinputs = true;
    vm.formfields = LoginService.fields();
    // console.log(vm.inputfields);
    vm.formmodel = LoginService.model();
    var path = $location.path().slice(1);
    vm.title = path.charAt(0).toUpperCase() + path.slice(1);
    //vm.title = LoginService.title;
    // vm.desc = LoginService.desc;
    vm.demo = function () {
        Data.demo = true
        LoginService.demo()
    }
    vm.onsubmit = function () {
        LoginService.execute(vm.formmodel);
    }

  }

})();
