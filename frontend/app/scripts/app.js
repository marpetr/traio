'use strict';

/**
 * @ngdoc overview
 * @name traioApp
 * @description
 * # traioApp
 *
 * Main module of the application.
 */
angular
  .module('traioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.ace'
  ])
  .config(function($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/learn', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'ArchiveCtrl'
      })
      .when('/task/:path*', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
