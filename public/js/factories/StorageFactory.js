  (function() {

  angular.module("SharingTreeApp")
    .factory('StorageFactory', function ($window){

      const store = $window.localStorage;
      const key = 'auth-token';

      function readToken() {
        return store.getItem(key)
      }

      function saveToken(token) {
        return !!store.setItem(key, token)
      }

      function removeToken() {
        console.log('REMOVEIT LOLO')
        return store.removeItem(key)
      }

      return { readToken, saveToken, removeToken }

    })

})()