// Create the module
// The ngRoute module helps your application to become a Single Page Application.
// referring to: https://www.w3schools.com/angular/angular_routing.asp
var meanApp = angular.module('meanApp', ['ngRoute']);



// configure the routes
meanApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "pages/home.html",
            controller: 'testController'
        })
        .when('/objects', {
            templateUrl: "pages/objects.html",
            controller: 'objectController'
        })
});



meanApp.controller("testController", function ($scope) {
    $scope.message = "hello from testController";
});

//angular.module('scotchTodo', ['todoController', 'todoService']);
//angular.module('objectBuilder', ['objectController', 'objectService']);


//
//
// var scotchTodo = angular.module('scotchTodo', []);
//
// function mainController($scope, $http) {
//
//     $http.get('/api/todos').success(function(data) {
//        console.log("Juhuu!")
//        console.log(data);
//        $scope.todos = data;
//     }).error(function (err) {
//        console.log("Ohh nooo!");
//        console.log(err);
//     });
//
//     $scope.createTodo = function () {
//         $http.post('/api/todos', $scope.formData)
//             .success(function (data) {
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function (data) {
//                 console.log('Error: ' + data);
//             })
//     }
//
//     $scope.deleteTodo = function (id) {
//         console.log(id);
//         $http.delete('/api/todos/' + id)
//             .success(function (data) {
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function(data) {
//                console.log("Error: " + data);
//             });
//     }
// }