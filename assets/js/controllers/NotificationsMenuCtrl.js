'use strict';

angular.module('adminLTEApp.Controllers').controller('NotificationsMenuCtrl', ['$scope', 'Notification', function($scope, Notification) {
  Notification.getUnread(function(response) {
    $scope.notifications = response.data;
  });
}]);
