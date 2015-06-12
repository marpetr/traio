'use strict';

angular.module('traioApp')
  .controller('ArchiveCtrl', function ($scope, taskArchive) {
    $scope.tasks = taskArchive;
  })
  .controller('PathBuilderCtrl', function ($scope) {
    if ($scope.partialPath) {
      $scope.partialPath = $scope.partialPath.concat([$scope.item.path]);
    }
    else {
      $scope.partialPath = [];
    }

    $scope.getCurrentTaskPath = function (partialPath) {
      return '/task/' + partialPath.join('/');
    };
  });
