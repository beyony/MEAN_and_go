angular.module('scotchTodo', ['todoController', 'todoService']);

angular.module('objectBuilder', ['objectController', 'objectService']);

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