angular.module("SharingTreeApp")

.controller('UserCtrl', function($scope, $rootScope) {
    $rootScope.section = 'user'

    $scope.reviews = false;
  $scope.showReviews = function(){
    if ($scope.reviews === false)
      $scope.reviews = true;
    else
      $scope.reviews = false;
  };
})