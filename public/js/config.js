angular.module("SharingTreeApp")

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/users/:id', {
            templateUrl: '/templates/user.html',
            controller: 'UserCtrl'
        })
        .when('/detail/:id', {
            templateUrl: '/templates/detail.html',
            controller: 'DetailCtrl'
        })
        .when('/usersList', {
            templateUrl: '/templates/usersList.html',
            controller: 'UsersListCtrl'
        })
})