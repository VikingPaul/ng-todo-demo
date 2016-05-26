app.controller("itemNewCtrl", function($scope, $http, $location, itemStorage) {
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    location: "",
    task: "",
    urgency: "",
    isCompleted: false
  };
  $scope.addNewItem = function() {
    itemStorage.postItem($scope.newTask)
      .then(function (response) {
        console.log(response);
        $location.url("/items/list");
      });
  };
});