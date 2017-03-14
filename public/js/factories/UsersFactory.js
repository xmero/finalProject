(function() {

  angular.module("SharingTreeApp")
    .factory("UsersFactory", function($http, $routeParams) {


      function getUsers(){
        var url = '/users/api'
        return $http.get(url)
                  .then( getResults )
      }

      function  getUser(id){
        var url= `/users/api/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      return {
        getUsers: getUsers,
        getUser: getUser,
      }

    })

  function getResults(response) {
    return response.data;
  }

  // function shortenResults(products) {
  //   console.log(products);
  //   return products.map(function(product) {
  //     var currentproductShortened = {
  //       name: product.name,
  //       img: product.img
  //     }
  //     return currentProductShortened;
  //   })
  // }

})()