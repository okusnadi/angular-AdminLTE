'use strict';

angular.module('adminLTEApp.Directives').directive('lteNotificationsMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/notifications-menu.html',
    replace: true
  };
});
