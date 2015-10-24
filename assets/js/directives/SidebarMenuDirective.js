'use strict';

angular.module('adminLTEApp.Directives').directive('lteSidebarMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/sidebar-menu.html',
    replace: true
  };
});
