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

      function  editProduct(id, name, location, description, image, free, postalCode ){
        const data ={ name, location, description, image, free, postalCode }
        var url= `/private/editProduct/${id}`
         return $http.put(url, data)
                  .then( getResults )
      }

      function  deleteProduct(id){
        var url= `/products/api/delete/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      return {
        getProducts: getProducts,
        getDetails: getDetails,
        deleteProduct: deleteProduct,
        editProduct: editProduct,
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