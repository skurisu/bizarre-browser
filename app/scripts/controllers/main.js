'use strict';

angular.module('bizarreBrowserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('bizarreBrowserApp')
  .controller('ProductsCtrl', ['Products','$scope', function (Products, $scope) {

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