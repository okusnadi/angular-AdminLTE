'use strict';

angular.module('adminLTEApp.Directives').directive('lteLogo', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/logo.html',
    replace: true
  };
});
