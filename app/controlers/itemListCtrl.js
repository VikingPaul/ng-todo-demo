app.controller("itemListCtrl", function($scope, $http, itemStorage) {
  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection) {
    $scope.items = itemCollection;
  });

  $scope.delete = function(id) {
    itemStorage.deleteItem(id).then(function(thing) {
      itemStorage.getItemList().then(function(itemCollection) {
        $scope.items = itemCollection;
      });
    });
  };
});