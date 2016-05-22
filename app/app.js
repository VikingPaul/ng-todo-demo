var app = angular.module("TodoApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/items/list", {
      templateUrl: "partials/items-list.html",
      controller: "itemListCtrl"
    })
    .when("/items/new", {
      templateUrl: "partials/items-new.html",
      controller: "itemNewCtrl"
    })
    .when("/items/details", {
      templateUrl: "partials/items-details.html",
      controller: "itemViewCtrl"
    })
    .otherwise("/items/list");
});