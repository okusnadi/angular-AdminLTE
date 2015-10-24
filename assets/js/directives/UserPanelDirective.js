'use strict';

angular.module('adminLTEApp.Directives').directive('lteUserPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/user-panel.html',
    replace: true
  };
});
