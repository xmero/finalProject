angular.module("SharingTreeApp", ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/index.html',
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

.controller('IndexCtrl', function($scope, $rootScope) {
    $rootScope.section = 'user'
})
