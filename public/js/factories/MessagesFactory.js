(function() {

  angular.module("SharingTreeApp")
    .factory("MessagesFactory", function($http, $routeParams) {

      function  getMessages(id){
        var url= `/messages/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      function  getMessageDetails(id){
        var url= `/messages/details/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      function  addMessage(streamId, association, sender, recipient, subject, body ,product ,from, to  ){
        const data ={ streamId, association, sender, recipient, subject, body ,product ,from, to  }
        var url= `/messages`
         return $http.post(url, data)
                  .then( getResults )
      }

      function  editMessage(id, status){
        const data = {status}
        var url= `/messages/update/${id}`
         return $http.put(url, data)
                  .then( getResults )
      }

      return {
        getMessages:getMessages,
        addMessage: addMessage,
        getMessageDetails:getMessageDetails,
        editMessage:editMessage
      }

    })

  function getResults(response) {
    return response.data;
  }

})()