app.controller("itemNewCtrl", function($scope) {
  $scope.newTask = {};
  $scope.items = [{
    id: 0,
    task: "mow",
    isCompleted: false,
    dueDate: "NOW",
    assignedTo: "tom",
    urgency: "high",
    location: "home",
    dependencies: "stuff, more stuff"
  },{
    id: 1,
    task: "grade quizes",
    isCompleted: false,
    dueDate: "NOW",
    assignedTo: "joe",
    urgency: "high",
    location: "NSS",
    dependencies: "wifi, vodka, laptop"
  },{
    id: 2,
    task: "sleep",
    isCompleted: false,
    dueDate: "soon",
    assignedTo: "me",
    urgency: "medium",
    location: "home",
    dependencies: "dog, bed, pillows, vodka"
  }];
  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    $scope.newTask = "";
  };
});