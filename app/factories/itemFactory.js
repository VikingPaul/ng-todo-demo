"use strict";
app.factory('itemStorage', function($http, $q){
  var getItemList = function() {
    let itemList = []
    return $q(function(resolve, reject) {
      $http.get("https://viking-todo-app.firebaseio.com/things.json")
        .success(function(items) {
          Object.keys(items).forEach(function(key) {
            items[key].id = key;
            itemList.push(items[key]);
          });
          resolve(itemList);
        }).error(function(error){
        reject(error);
        });
    });
  };

  var deleteItem = function(itemId) {
    return $q(function(resolve, reject) {
      $http.delete(`https://viking-todo-app.firebaseio.com/things/${itemId}.json`)
        .success(function(thingy) {
          resolve(thingy);
        });
    });
  };

  var postItem = function(newItem) {
    return $q(function(resolve,reject) {
      $http.post("https://viking-todo-app.firebaseio.com/things.json", JSON.stringify({
          assignedTo: newItem.assignedTo,
          dependencies: newItem.dependencies,
          dueDate: newItem.dueDate,
          location: newItem.location,
          task: newItem.task,
          urgency: newItem.urgency,
          isCompleted: newItem.isCompleted
      }))
        .success(function(thingy) {
          resolve(thingy);
        })
    })
  }

  return {getItemList:getItemList, deleteItem:deleteItem, postItem: postItem}
})