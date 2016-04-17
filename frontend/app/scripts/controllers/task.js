'use strict';

angular.module('traioApp')
  .controller('TaskCtrl', function ($scope, $routeParams, taskArchive) {
    $scope.taskPath = $routeParams.path;
    var parts = $routeParams.path.split('/');
    var taskObject = taskArchive;
    for (var i = 0; i < parts.length; i++) {
      if (!taskObject.items) {
        taskObject = null;
        break;
      }
      var found = false;
      for (var j = 0; j < taskObject.items.length; j++) {
        if (taskObject.items[j].path === parts[i]) {
          taskObject = taskObject.items[j];
          found = true;
          break;
        }
      }
      if (!found) {
        taskObject = null;
        break;
      }
    }
    $scope.taskObject = taskObject;
    $scope.taskPdfPath = '/pdfjs/web/viewer.html?file=' +
      encodeURIComponent('/tasks/lmio-2016-4et-sal-' + taskObject.path + '.pdf') +
      '#locale=lt&zoom=page-width';
  });
