meanApp.controller("objectEditController", ['$scope', '$http', 'sharedService', 'Objects', function ($scope, $http, sharedService, Objects) {

    sharedService.setHasProgress(true);
    sharedService.setProgressStep(1, 3);

    var currentObject = {};


    $scope.createObject = function () {
        console.log($scope.formData);
        Objects.create($scope.formData)
            .success(function (objects) {
                $scope.formData = {};
                sharedService.setProgressStep(2, 3);
            });
    };


    // THREE  ACTIONS

    var cube;

    $scope.initThree = function (accessor) {
        console.log(accessor);
        cube = initPreview(accessor);

        cube.scale.x = 20;
        cube.scale.y = 14;
        cube.scale.z = 0.1;
    };

    function updateCube() {
        cube.scale.x = Math.max($scope.panel.scaleX, 0.1);
        cube.scale.y = Math.max($scope.panel.scaleY, 0.1);
        cube.scale.z = Math.max($scope.panel.scaleZ, 0.1);
    };

    // Panel Control  ---->

    $scope.panel = {
        scaleX: 20,
        scaleY: 14,
        scaleZ: 0.1
    };

    $scope.$watch('panel', function (newValue, oldValue) {
        updateCube();
    }, true);


}]);