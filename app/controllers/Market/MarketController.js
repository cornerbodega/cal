(function(){
  angular
    .module('myApp')
    .controller('MarketController', ['Market', 'FormDataService',
      MarketController
    ]);

  function MarketController(Market, FormDataService) {
    var vm = this;
    console.log('Market please!')
    // console.log(ConnectService);
    // Market.load().then()
    // Market.load()
    // vm.Market = Market.formatted
    // console.log(Market);
    // vm.market_posts = Market.market_posts
    console.log(FormDataService);
    vm.formfields = FormDataService.getform('new_market_post')
    console.log(vm.formfields);
    // console.log('12232431413422421');
    vm.formmodel = {}
    // console.log(vm.formfields);
    // vm.Market =
    // console.log(vm.Market);

  }

})();
