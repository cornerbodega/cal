(function(){
  angular
    .module('myApp')
    .controller('HistoryController', ['ConnectService','History','RawHistory',
      HistoryController
    ]);

  function HistoryController(ConnectService, History, RawHistory) {
    var vm = this;
    // console.log('History please!')
    // console.log(ConnectService);
    // History.load().then()
    // History.load()
    // vm.history = History.formatted
    console.log(History);
    console.log(RawHistory);
    vm.history = History.format(RawHistory.data)
    // vm.history =
    // console.log(vm.history);

  }

})();
