(function() {
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: '/js/welcome.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/js/login.html'
      })
      .state('account', {
        url: '/account',
        templateUrl: '/js/account.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: '/js/cart.html'
      })
      .state('order', {
        url: '/order',
        templateUrl: '/js/order.html'
      });

      $urlRouterProvider.otherwise('/');
  }
})();
