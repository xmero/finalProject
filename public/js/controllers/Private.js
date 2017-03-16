angular.module("SharingTreeApp")

.controller('PrivateCtrl', function($scope, $rootScope, UsersFactory) {
    $rootScope.section = 'private'

    UsersFactory.getUser()
        .then(function(user) {
            console.log(user)
            $scope.user = user;
        })
})

