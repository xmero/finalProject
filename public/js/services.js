angular.module('SharingTreeApp')
  .factory('DataFactory', function ($http){

    function getPrivateData() {
      const url = '/private'
      return $http.get(url)
        .then( response => response.data )
    }

    return { getPrivateData }

  })
  .factory('AuthFactory', function($http, $q, $rootScope, $location, StorageFactory, jwtHelper) {

    function login(credentials) {
      const url = '/api/login'
      return $http.post(url, credentials)
        .then( response => response.data.token )
        .then( token => {
          StorageFactory.saveToken(token)
          return token
        })
    }

    function register(credentials) {
      const url = '/api/register'
      return $http.post(url, credentials)
        .then( $location.path("/login") )
    }

    function logout() {
      console.log("WE ARE IN AUT FAILTORY")
      delete $rootScope.loggedUser
      StorageFactory.removeToken()
    }

    function isLoggedIn() {
      try {
        const token = StorageFactory.readToken()
        if (!token) return false
        const tokenPayload = jwtHelper.decodeToken( token )
        return !( jwtHelper.isTokenExpired( token ) )
      } catch( e ) {
        return $q.reject('Not Authenticated')
      }
    }

    function setCredentials( token ) {
      var tokenPayload = jwtHelper.decodeToken( token )
      $rootScope.loggedUser = tokenPayload;
    }


    return { login, register, logout, isLoggedIn, setCredentials }

  })
