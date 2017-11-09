// Create the module
// The ngRoute module helps your application to become a Single Page Application.
// referring to: https://www.w3schools.com/angular/angular_routing.asp
var meanApp = angular.module('meanApp', ['ngRoute']);



// super simple service
meanApp.factory('Objects', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/objects');
        },
        create: function (objectData) {
            console.log("CREATE: ");
            console.log(objectData);
            return $http.post('/api/objects', objectData);
        },
        delete: function (id) {
            return $http.delete('/api/objects/' + id);
        }
    }
}]);

// super simple service
meanApp.factory('ObjectDetails', ['$http', function($http) {
    return {
        get : function(id) {
            return $http.get('/api/objectDetails/' + id);
        },
        create : function(detailsData) {
            console.log("detailsData");
            console.log(detailsData);
            return $http.post('/api/objectDetails', detailsData);
        },
        delete : function(id) {
            return $http.delete('/api/objectDetails/' + id);
        }
    }
}]);

// shared service for progress bar in nav region
meanApp.factory('sharedService', function ($rootScope) {

    console.log("sharedService instantiated!");

    var sharedService = {};

    sharedService.currentObject = {};

    sharedService.message = 'Hello from sharedService (initial)';
    sharedService.hasProgress = false;

    sharedService.setHasProgress = function (bool) {
        this.hasProgress = bool;
        $rootScope.$broadcast('handleSetHasProgress');
    };
    sharedService.setProgressStep = function (index, length) {
        this.message = index + "/" + length;
        $rootScope.$broadcast('handleProgressUpdate');
    };

    return sharedService;
});



meanApp.controller("mainController", ['$scope', 'sharedService', function ($scope, sharedService) {
    $scope.message = "hello from testController";

    sharedService.setHasProgress(false);


    $scope.$on('handleProgressUpdate', function () {
        console.log("handleProgressUpdate");
        $scope.progress = "Step " + sharedService.message;
    });
    $scope.$on('handleSetHasProgress', function () {
        console.log("handleSetHasProgress");
        $scope.hasProgress = sharedService.hasProgress;
    });

}]);




// configure the routes
meanApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "pages/home.html",
            controller: 'mainController'
        })
        .when('/objects', {
            templateUrl: "pages/objects.html",
            controller: 'objectController'
        })
        .when('/objectEdit', {
            templateUrl: "pages/objectEdit.html",
            controller: 'objectEditController'
        })
        .when('/objectEdit2', {
            templateUrl: "pages/objectEdit2.html",
            controller: 'objectEditController2'
        })
        .when('/objectEdit3', {
            templateUrl: "pages/objectEdit3.html",
            controller: 'objectEditController3'
        });
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