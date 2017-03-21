angular.module("SharingTreeApp")

.controller('AddProductCtrl', function($scope, $location, $rootScope, ProductsFactory, Upload) {
    $rootScope.section = 'addProduct'

        $scope.fileSelected = (files) => {
          if (files && files.length) {
            $scope.file = files[0];
          }
        }

        $scope.addProduct = (e) => {
        e.preventDefault()
        const url = '/upload' //node.js route
          const file = $scope.file
          Upload.upload({ url, file })
            .success( ({imageLink}) => $scope.imageLink = imageLink )
            .then(()=>{      
              const owner = $scope.loggedUser.id
              const image = $scope.imageLink
              ProductsFactory.addProduct(owner, $scope.name, $scope.category, $scope.location, $scope.postalCode, $scope.description, image  )
                .then (() => $location.path('/'))
                  })
         }

})

