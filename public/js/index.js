angular.module("SharingTreeApp", ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'IndexCtrl'
        })
        .when('/user', {
            templateUrl: '/templates/user.html',
            controller: 'UserCtrl'
        })
                .when('/detail', {
            templateUrl: '/templates/detail.html',
            controller: 'DetailCtrl'
        })
})

.controller('IndexCtrl', function($scope, $rootScope) {
    $rootScope.section = 'home'
})

.controller('UserCtrl', function($scope, $rootScope) {
    $rootScope.section = 'user'

    $scope.reviews = false;
  $scope.showReviews = function(){
    if ($scope.reviews === false)
      $scope.reviews = true;
    else
      $scope.reviews = false;
  };
})
.controller('DetailCtrl', function($scope, $rootScope) {
    $rootScope.section = 'detail'
})
