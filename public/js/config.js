angular.module("SharingTreeApp")

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl'
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