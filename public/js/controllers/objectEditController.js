meanApp.controller("objectEditController", ['$scope', '$http', '$window', 'sharedService', 'Objects', function ($scope, $http, $window, sharedService, Objects) {

    sharedService.setHasProgress(true);
    sharedService.setProgressStep(1, 3);


    $scope.createObject = function () {
        console.log('$scope.formData');
        console.log($scope.formData);
        $scope.formData.category = $scope.selected; //???
        console.log($scope);

        Objects.create($scope.formData)
            .success(function (objects) {
                $scope.formData = {};
                sharedService.currentObject = objects[objects.length - 1];
                $window.location.href = '#objectEdit2';
            });
    };



    $http.get('/api/categories').success(function (data) {
        console.log(data);
        $scope.categories = data;
    });





}]);