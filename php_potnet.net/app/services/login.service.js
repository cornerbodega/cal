
angular
.module('myApp')
.factory('LoginService', LoginService);

function LoginService($location, ConnectService, $mdDialog, $rootScope, DynamicStaticDataService) {
    var vm = this;
    console.log('login service!');
    //UNCOMMENT !
    // sessionStorage.clear()
    localStorage.clear()

    function model () {
        return {
            action : "login"
        }
    }

    function execute(data) {
        console.log('execute!!');
        console.log(data);
        // $rootScope.user = {
        //     email: data.email
        // }
        sessionStorage.user = JSON.stringify({ ubi: data.license_number, email: data.username })
        ConnectService.post(data, f, s);
    }

    function s (res) {
        console.log("Log In Success ");
        console.log(res);
        // console.log(sessionStorage);
        sessionStorage.sessionid = res.sessionid;
        // $rootScope.user.sessionid = res.sessionid
        console.log(sessionStorage);
        // REFRESHALL!!
        // DynamicStaticDataService.refreshall()
        $location.path('/traceability')
    }

    function f (res) {
        console.log("Error! + " + res.error);
        alert = $mdDialog.alert({
            title: 'Error',
            content: res.error,
            ok: 'Close'
        });
        $mdDialog
        .show( alert )
        .finally(function() {
            alert = undefined;
        });
    }

    function fields () {
        return [
            {
                key: 'username',
                type: 'fancyinput',
                templateOptions: {
                    label: 'Username',
                }
            },
            {
                key: 'password',
                type: 'fancyinput',
                templateOptions: {
                    label: 'Password',
                }
            },
            {
                key: 'license_number',
                type: 'fancyinput',
                templateOptions: {
                    label: 'UBI',
                }
            }
        ];
    }
    return {
        title: "Log In",
        desc: "Please enter your WSLCB Traceability login information",
        fields: fields,
        model: model,
        f: f,
        s: s,
        execute: execute
    }
}
