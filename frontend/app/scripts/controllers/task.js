'use strict';

angular.module('traioApp')
  .controller('TaskCtrl', function ($scope, $routeParams, $sce) {
    $scope.taskPath = $routeParams.path;
    $scope.pdfViewerPath =
      '/pdfjs/web/viewer.html?file=' +
      encodeURIComponent('/tasks/' + $scope.taskPath + '.pdf') +
      '#locale=lt&zoom=page-width';
  });
