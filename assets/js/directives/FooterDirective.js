'use strict';

angular.module('adminLTEApp.Directives').directive('lteFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footer.html',
    replace: true
  };
});
