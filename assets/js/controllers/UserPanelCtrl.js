'use strict';

angular.module('adminLTEApp.Controllers').controller('UserPanelCtrl', ['$scope', 'User', function($scope, User) {
  User.getProfile(function(response) {
    $scope.user = response.data;
  });
}]);
