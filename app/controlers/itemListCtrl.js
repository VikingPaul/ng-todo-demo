app.controller("itemListCtrl", function($scope, $http) {
  $scope.items = [];
  $http.get("https://viking-todo-app.firebaseio.com/things.json")
    .success(function(items) {
      Object.keys(items).forEach(function(key) {
        items[key].id = key;
        $scope.items.push(items[key]);
    });
  });
});