'use strict';

// angular.module('bizarreBrowserApp')
//   .service('Products', function Products() {
//     // AngularJS will instantiate a singleton by calling "new" on this function
//     $http.get('data/products.json').
//     success(function(data, status, headers, config) {
//       return data;
//     }).
//     error(function(data, status, headers, config) {
//       // log error
//     });
//   });


angular.module('bizarreBrowserApp')
  .factory('Products', ['$http', function Products($http) {

    return {
      get: function() {
        return $http.get('data/products.json') // this is a promise
      }
    }
  }]);