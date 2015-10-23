'use strict';

angular.module('adminLTEApp.Services').service('Task', ['$http', function($http) {
  this.getUncompleted = function(successCallback, errorCallback) {
    $http.get('data/uncompleted-tasks.json')
      .then(successCallback, errorCallback);
  };
}]);
