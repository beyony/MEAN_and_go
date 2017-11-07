angular.module('objectController', [])

    .controller('mainController', ['$scope','$http','Objects', function($scope, $http, Objects) {
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