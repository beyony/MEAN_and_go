meanApp.controller("objectController", ['$scope', '$http', '$window', 'sharedService', 'Objects', function ($scope, $http, $window, sharedService, Objects) {

    // Progress Settings
    sharedService.setHasProgress(false);


    Objects.get()
        .success(function (data) {
            $scope.objects = data;
            $scope.loading = false;
            console.log(data);
        });


    $scope.deleteObject = function (id) {
        Objects.delete(id)
            .success(function (data) {
                console.log("data coming in: ");
                console.log(data);
                $scope.objects = data;
            })
    };

    $scope.editObject = function(object) {
        sharedService.currentObject = object;
        $window.location.href = '#objectEdit2';
    };


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