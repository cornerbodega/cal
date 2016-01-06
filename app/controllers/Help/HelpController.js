(function(){
  angular
    .module('myApp')
    .controller('HelpController', ['$scope', '$http',
      HelpController
    ]);

  function HelpController($scope, $http) {
    //   console.log('WHAT');
    var user = JSON.parse(sessionStorage.user)
    $scope.submitted = false
    // $scope.update = function() {
    //     console.log($scope.message);
    // }
    $scope.submitFeedback = function(){
        $scope.submitted = true
        console.log($scope.message);
        if ($scope.message.length < 2) return
        $http.post('php/feedback_w.php', {user:user, data: $scope.message})
        // $window.location.href = ("mailto:feedback@potnet.net",_blank)
        // window.open('mailto:feedback@potnet.net','_blank');
        // vm.message
    }
    // vm.submitFeedback()
  }

})();
