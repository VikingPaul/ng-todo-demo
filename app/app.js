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
  $scope.showListView = false;
  $scope.newTask = {}
  $scope.items = [
  {
    id: 0,
    task: "mow",
    isCompleted: false,
    dueDate: "NOW",
    assignedTo: "greg",
    urgency: "high",
    location: "here",
    dependencies: ["stuff", "more stuff"]
  },{
    id: 1,
    task: "grade quizes",
    isCompleted: false,
    dueDate: "NOW",
    assignedTo: "joe",
    urgency: "high",
    location: "NSS",
    dependencies: ["wifi", "vodka", "laptop"]
  },{
    id: 2,
    task: "sleep",
    isCompleted: false,
    dueDate: "soon",
    assignedTo: "me",
    urgency: "medium",
    location: "home",
    dependencies: ["dog", "bed", "pillows"]
  }];

  $scope.newItem = function() {
    console.log("new item");
    $scope.showListView = false;
  };
  $scope.allItem = function() {
    console.log("all items");
    $scope.showListView = true;
  };
});