angular.module("SharingTreeApp")

.controller('DetailCtrl', function($scope, $rootScope, $routeParams,ProductsFactory, UsersFactory) {
    $rootScope.section = 'detail'
    const id = $routeParams
   
          ProductsFactory.getDetails(id.id)
        .then( function(product) {
        console.log(id.id)
         $scope.product = product;
        })
})

