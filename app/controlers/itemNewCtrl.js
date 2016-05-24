app.controller("itemNewCtrl", function($scope, $http, $location) {
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    location: "",
    task: "",
    urgency: "",
    isCompleted: false
  };
  $scope.items = [];
  $scope.addNewItem = function() {
    $http.post("https://viking-todo-app.firebaseio.com/things.json", JSON.stringify({
        assignedTo: $scope.newTask.assignedTo,
        dependencies: $scope.newTask.dependencies,
        dueDate: $scope.newTask.dueDate,
        location: $scope.newTask.location,
        task: $scope.newTask.task,
        urgency: $scope.newTask.urgency,
        isCompleted: $scope.newTask.isCompleted
      })
    ).success(function(thing){
      $location.url("/items/list");
    });
  };
});