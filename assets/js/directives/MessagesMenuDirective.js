'use strict';

angular.module('adminLTEApp.Directives').directive('lteMessagesMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/messages-menu.html',
    replace: true
  };
});
