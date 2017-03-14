angular.module("SharingTreeApp")

.controller('DetailCtrl', function($scope, $rootScope, $routeParams,ProductsFactory) {
    $rootScope.section = 'detail'
    const id = $routeParams
   
          ProductsFactory.getDetails(id.id)
        .then( function(product) {
        console.log(product.owner._id)
        console.log(product)
         $scope.product = product;
        })
})

