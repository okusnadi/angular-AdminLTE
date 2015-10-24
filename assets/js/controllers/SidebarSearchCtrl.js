'use strict';

angular.module('adminLTEApp.Controllers').controller('SidebarSearchCtrl', ['$scope', function($scope) {
  $scope.search = function() {
    alert('Searching for: '+$scope.query);
  }
}]);
