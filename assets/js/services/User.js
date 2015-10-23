'use strict';

angular.module('adminLTEApp.Services').service('User', ['$http', function($http) {
  this.getProfile = function(successCallback, errorCallback) {
    $http.get('data/user-profile.json')
      .then(successCallback, errorCallback);
  };
}]);
