app.controller("itemViewCtrl", function($scope, $http,$routeParams) {
  $scope.selectedItem = {};
  $scope.items = [];
  // $http.get(`https://viking-todo-app.firebaseio.com/things/${$routeParams.itemId}.json`)
  //   .success(function(items) {
  //     $scope.selectedItem = items
  // });
  $http.get("https://viking-todo-app.firebaseio.com/things.json")
    .success(function(items) {
      Object.keys(items).forEach(function(key) {
        items[key].id = key;
        $scope.items.push(items[key]);
        $scope.selectedItem = $scope.items.filter(function(item) {
          return item.id === $routeParams.itemId;
        })[0];
    });
  });
});