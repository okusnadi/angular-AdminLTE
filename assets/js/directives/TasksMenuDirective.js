'use strict';

angular.module('adminLTEApp.Directives').directive('lteTasksMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/tasks-menu.html',
    replace: true
  };
});
