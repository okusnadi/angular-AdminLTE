'use strict';

angular.module('adminLTEApp.Controllers').controller('FooterCtrl', ['$scope', 'META', function($scope, META) {
  $scope.meta = META;
}]);
