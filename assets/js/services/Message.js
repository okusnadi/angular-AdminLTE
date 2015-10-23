'use strict';

angular.module('adminLTEApp.Services').service('Message', ['$http', function($http) {
  this.getUnread = function(successCallback, errorCallback) {
    $http.get('data/unread-messages.json')
      .then(successCallback, errorCallback);
  };
}]);
