meanApp.controller("objectEditController", ['$scope', '$http', '$window', 'sharedService', 'Objects', function ($scope, $http, $window, sharedService, Objects) {

    sharedService.setHasProgress(true);
    sharedService.setProgressStep(1, 3);


    $scope.createObject = function () {
        $scope.formData.category = $scope.selected;

        Objects.create($scope.formData)
            .success(function (objects) {
                sharedService.currentObject = objects[objects.length - 1];
                $window.location.href = '#objectEdit2';
            });
    };



    $http.get('/api/categories').success(function (data) {
        $scope.categories = data;
    });





}]);