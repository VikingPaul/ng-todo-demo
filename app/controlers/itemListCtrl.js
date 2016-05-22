app.controller("itemListCtrl", function($scope) {
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
});