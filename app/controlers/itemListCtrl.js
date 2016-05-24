app.controller("itemListCtrl", function($scope, $http) {
  $scope.items = [];
  var getItems = function() {
    $http.get("https://viking-todo-app.firebaseio.com/things.json")
      .success(function(items) {
        Object.keys(items).forEach(function(key) {
          items[key].id = key;
          $scope.items.push(items[key]);
      });
    });
  };
  getItems();
  $scope.delete = function(id) {
    console.log("id", id);
    $http.delete(`https://viking-todo-app.firebaseio.com/things/${id}.json`)
      .success(function() {
        $scope.items = [];
        getItems();
      });
  };
});