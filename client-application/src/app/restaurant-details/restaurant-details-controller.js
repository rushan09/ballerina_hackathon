(function () {
    angular.module("AppModule")
            .controller("RestaurantDetailsController", ["$scope", "$routeParams", "RestaurantDetailService", function ($scope, $routeParams, RestaurantDetailService) {
                $scope.max = 5;
                $scope.isReadonly = true;
                $scope.id = $routeParams.id;
                $scope.restaurantData = RestaurantDetailService.getRestaurantDetails();
                console.log($scope.id);
            }]);
}());