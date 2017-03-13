angular.module("SharingTreeApp")

.controller('HomeCtrl', function($scope, $rootScope, ProductsFactory) {
    $rootScope.section = 'home'
     ProductsFactory.getProducts()
       .then( function(products) {
        $scope.products = products;
       })

})

