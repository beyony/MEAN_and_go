meanApp.controller("objectController", ['$scope', '$http', function ($scope, $http) {

    // Service ->>>
    var Objects = {
        get: function () {
            return $http.get('/api/objects');
        },
        create: function (todoData) {
            return $http.post('/api/objects', todoData);
        },
        delete: function (id) {
            return $http.delete('/api/objects/' + id);
        }
    };
    // <<<<- Service


    $scope.message = "hello from objectController";

    Objects.get()
        .success(function (data) {
            $scope.objects = data;
            $scope.loading = false;
            console.log(data);
        });


/*    $scope.createObject = function () {
        console.log($scope.formData);
        Objects.create($scope.formData)
            .success(function (objects) {
                console.log(objects);
                $scope.formData = {};
                $scope.objects = objects;
            });
    };

    $scope.deleteObject = function (id) {
        Objects.delete(id)
            .success(function (data) {
                $scope.objetcs = data;
            })
    };*/


}]);


/*
angular.module('objectController', [])

    .controller('mainController', ['$scope','$http','Objects', function($scope, $http, Objects) {

        $scope.message = "Hello from objects controller";


        $scope.formData = {};
        $scope.loading = true;

        Objects.get()
            .success(function (data) {
            $scope.objetcs = data;
            $scope.loading = false;
            console.log(data);
        });

        $scope.createObject = function () {
            console.log($scope.formData);
            Objects.create($scope.formData)
                .success(function (objects) {
                    console.log(objects);
                    $scope.formData = {};
                    $scope.objects = objects;
                });
        };

        $scope.deleteObject = function (id) {
            Objects.delete(id)
                .success(function (data) {
                    $scope.objetcs = data;
                })
        };



    }]);
    */