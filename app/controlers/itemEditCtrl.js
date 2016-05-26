app.controller("itemEditCtrl", function($scope, $location, itemStorage, $routeParams) {
  $scope.title = "Edit Item";
  $scope.button = "Update";
  $scope.newTask = {};

  itemStorage.getSingleItem($routeParams.itemId)
    .then(function(stuff) {
      $scope.newTask = stuff;
    });
  $scope.addNewItem = function() {
    itemStorage.updateItem($routeParams.itemId, $scope.newTask)
      .then(function (response) {
        $location.url("/items/list");
      });
  };
});