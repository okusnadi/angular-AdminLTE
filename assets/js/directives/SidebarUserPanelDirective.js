'use strict';

angular.module('adminLTEApp.Directives').directive('lteSidebarUserPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/sidebar-user-panel.html',
    replace: true
  };
});
