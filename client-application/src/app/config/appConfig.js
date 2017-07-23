(function () {
    angular.module("AppModule")
            .config(function ($routeProvider) {
                $routeProvider
                        .when("/", {
                            templateUrl: "/app/home/home.html",
                            controller: "HomeController"
                        })
                        .when("/location-rest", {
                            templateUrl: "/app/location-rest/location-rest-view.html",
                            controller: "LocationRestController"
                        })
                        .when("/restaurant-details/:id", {
                            templateUrl: "/app/restaurant-details/restaurant-details-view.html",
                            controller: "RestaurantDetailsController"
                        })
                        .when("/page-1", {
                            templateUrl: "/app/page1/page1.html",
                            controller: "Page1Controller"
                        });
            });
}());