'use strict';

angular.module('traioApp')
  .controller('TaskCtrl', function ($scope, $routeParams) {
    $scope.taskPath = $routeParams.path;
  });
