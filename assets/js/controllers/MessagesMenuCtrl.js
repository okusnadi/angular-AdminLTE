'use strict';

angular.module('adminLTEApp.Controllers').controller('MessagesMenuCtrl', ['$scope', 'Message', function($scope, Message) {
  Message.getUnread(function(response) {
    $scope.messages = response.data;
  });
}]);
