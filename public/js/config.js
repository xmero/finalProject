angular.module("SharingTreeApp")

    .config( function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })

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
//////////////// LOGINSTEIN ROUTES
         .when('/login',{
            templateUrl: '/templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register',{
            templateUrl: '/templates/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/private',{
            templateUrl: '/partials/private.html',
            controller: 'PrivateCtrl',
        })


})

.run(function($rootScope, $location, StorageFactory, AuthFactory){

      if ( AuthFactory.isLoggedIn() ) {
        const token = StorageFactory.readToken()
        AuthFactory.setCredentials(token)
      }

      $rootScope.$on('$routeChangeStart', function(next, current, previous, rejection){

        if (!AuthFactory.isLoggedIn()){

          $location.path('/login')
        }
          // if(rejection === 'Not Authenticated'){
          //     $location.path('/login');
          // }
      })
  })