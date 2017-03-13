(function() {

  angular.module("SharingTreeApp")
    .factory("ProductsFactory", function($http) {


      function getProducts(){
        var url = '/api'

        return $http.get(url)
                  .then( getResults )
      }

      return {
        getProducts: getProducts,
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