'use strict';

angular.module('bizarreBrowserApp')
  .controller('MainCtrl', ['Products','$scope', function (Products, $scope) {

    Products.get()
      .success(function(values){
        // pass it back to the UI
        $scope.products = values
      })
      .error(function(err){
        // show that we got an error in the UI
        $scope.products = err;
      })
  }]);

// angular.module('bizarreBrowserApp')
//   .controller('ProductsCtrl', ['Products','$scope', function (Products, $scope) {

//     Products.get()
//       .success(function(values){
//         // pass it back to the UI
//         $scope.products = values
//       })
//       .error(function(err){
//         // show that we got an error in the UI
//         $scope.products = err;
//       })
//   }]);