app.controller("itemViewCtrl", function($scope, $http,$routeParams, itemStorage) {
  $scope.selectedItem = {};
  $scope.items = [];
  // $http.get(`https://viking-todo-app.firebaseio.com/things/${$routeParams.itemId}.json`)
  //   .success(function(items) {
  //     $scope.selectedItem = items
  // });

  itemStorage.getItemList().then(function(itemCollection) {
    $scope.items = itemCollection;
    $scope.selectedItem = $scope.items.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  });
});