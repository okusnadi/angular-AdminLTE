'use strict';

angular.module('adminLTEApp.Filters').filter('percentage', ['$window', '$filter', function ($window, $filter) {
  return function (input, decimals, suffix) {
    decimals = $window.isFinite($window.parseInt(decimals)) ? $window.parseInt(decimals) :  0;

    suffix = angular.isString(suffix) ? suffix : '%';

    if ($window.isNaN(input)) {
      return '';
    }

    return $filter('number')(input * 100, decimals) + suffix;
  };
}]);
