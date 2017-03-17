angular.module("SharingTreeApp")

.controller('PrivateCtrl', function($scope, $rootScope, UsersFactory,$location, StorageFactory ) {
    $rootScope.section = 'private'
    const id = $scope.loggedUser.id

    UsersFactory.getUser(id)
        .then(function(user) {
            $scope.user = user;
            $scope.username = user.username
            $scope.email = user.email
            $scope.description = user.description
            $scope.image = user.image
            $scope.location = user.location
        })

    $scope.editUser = (e) => {
      e.preventDefault()
      const { username, email, location, description, image } = $scope
      UsersFactory.editUser(id, username, email, location, description, image)
        .then(function(user) {
          $scope.user = user;
      })
        .then( () => $location.path('/') )
    }

    $scope.deleteUser = (e) => {
      e.preventDefault()
      UsersFactory.deleteUser(id)
        .then (() => $location.path('/'))
        .then(() => {
          delete $rootScope.loggedUser
          StorageFactory.removeToken()
    })
    }

})

