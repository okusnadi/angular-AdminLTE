'use strict';

angular.module('adminLTEApp.Directives').directive('lteUserMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/user-menu.html',
    replace: true
  };
});
