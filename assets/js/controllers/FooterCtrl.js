'use strict';

angular.module('adminLTEApp.Controllers').controller('FooterCtrl', ['$scope', 'META_DATA', function($scope, META_DATA) {
  $scope.meta = META_DATA;
  console.log($scope.meta);
}]);
