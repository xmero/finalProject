(function() {

  angular.module("SharingTreeApp")
    .factory("ProductsFactory", function($http, $routeParams) {


      function getProducts(){
        var url = '/products/api'
        return $http.get(url)
                  .then( getResults )
      }

      function  getDetails(id){
        var url= `/products/api/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      return {
        getProducts: getProducts,
        getDetails: getDetails
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