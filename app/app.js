var app = angular.module("TodoApp", ['ngRoute'])
  .constant('URL', 'https://viking-todo-app.firebaseio.com/');

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
    .when("/items/:itemId", {
      templateUrl: "partials/items-details.html",
      controller: "itemViewCtrl"
    })
    .otherwise("/items/list");
});