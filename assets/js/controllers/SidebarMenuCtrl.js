'use strict';

angular.module('adminLTEApp.Controllers').controller('SidebarMenuCtrl', ['$scope', 'MENUS', function($scope, MENUS) {
  $scope.menus = MENUS;
}]);
