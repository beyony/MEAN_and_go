meanApp.controller("objectEditController2", ['$scope', '$http', '$window', 'sharedService', 'Objects', 'ObjectDetails', function ($scope, $http, $window, sharedService, Objects, ObjectDetails) {

    var cube;

    sharedService.setProgressStep(2, 3);
    $scope.currentObject = sharedService.currentObject;

    $scope.save3D = function () {
        ObjectDetails.create({
            sizeX: cube.scale.x,
            sizeY: cube.scale.y,
            sizeZ: cube.scale.z,
            object_id: $scope.currentObject._id
        });
        $window.location.href = '#objectEdit3';
    };



    // Check if object reference exists, if not provide preview
    if (sharedService.currentObject._id) {
        ObjectDetails.getForObject(sharedService.currentObject._id)
            .success(function (data) {
                threeAction(data);
            });
    }
    else {
        threeAction();
    }


    function threeAction(objectDetails) {

        cube = initPreview('canvas','CanvasHere');

        cube.scale.x = objectDetails ? objectDetails.sizeX : 1;
        cube.scale.y = objectDetails ? objectDetails.sizeY : 1;
        cube.scale.z = objectDetails ? objectDetails.sizeZ : 1;

        function updateCube() {
            cube.scale.x = Math.max($scope.panel.scaleX, 0.1);
            cube.scale.y = Math.max($scope.panel.scaleY, 0.1);
            cube.scale.z = Math.max($scope.panel.scaleZ, 0.1);
        }

        $scope.panel = {
            scaleX: cube.scale.x,
            scaleY: cube.scale.y,
            scaleZ: cube.scale.z
        };

        $scope.$watch('panel', function (newValue, oldValue) {
            updateCube();
        }, true);
    }


}]);