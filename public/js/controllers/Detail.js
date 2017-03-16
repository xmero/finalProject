angular.module("SharingTreeApp")

.controller('DetailCtrl', function($scope, $rootScope, $routeParams,ProductsFactory, UsersFactory) {
    $rootScope.section = 'detail'
    const id = $routeParams
   
      ProductsFactory.getDetails(id.id)
        .then( function(product) {
         $scope.product = product;
        })

        if($scope.loggedUser){
          
      UsersFactory.getUser($scope.loggedUser.id)
        .then(function(user) {
            $scope.username = user.username;
        })
        }
})

