'use strict';

angular.module('adminLTEApp.Services').service('Notification', ['$http', function($http) {
  this.getUnread = function(successCallback, errorCallback) {
    $http.get('data/unread-notifications.json')
      .then(successCallback, errorCallback);
  };
}]);
