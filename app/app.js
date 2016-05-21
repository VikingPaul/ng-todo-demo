var app = angular.module("TodoApp", []);
app.controller('NavCtrl', function($scope){
  $scope.navItems = [{
    name: "Logout"
  },{
    name: "All Items"
  },{
    name: "New Item"
  }];
});
app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [
  {
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
  $scope.searchText = "";

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    $scope.newTask = "";
  };
  $scope.newItem = function() {
    console.log("new item");
    $scope.showListView = false;
  };
  $scope.allItem = function() {
    console.log("all items");
    $scope.showListView = true;
  };
});