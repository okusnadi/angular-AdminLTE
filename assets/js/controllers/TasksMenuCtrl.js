'use strict';

angular.module('adminLTEApp.Controllers').controller('TasksMenuCtrl', ['$scope', 'Task', function($scope, Task) {
  Task.getUncompleted(function(response) {
    $scope.tasks = response.data;
  });
}]);
