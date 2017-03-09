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
})

.controller('IndexCtrl', function($scope, $rootScope) {
    $rootScope.section = 'index'
})

.controller('UserCtrl', function($scope, $rootScope) {
    $rootScope.section = 'user'
})
