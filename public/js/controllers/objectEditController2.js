meanApp.controller("objectEditController2", ['$scope', '$http', '$window', 'sharedService', 'Objects', 'ObjectDetails', function ($scope, $http, $window, sharedService, Objects, ObjectDetails) {

    sharedService.setProgressStep(2, 3);
    $scope.currentObject = sharedService.currentObject;


    $scope.save3D = function () {
        // Objects.create($scope.formData)
        //     .success(function (objects) {
        //         $scope.formData = {};
        //         sharedService.currentObject = objects[objects.length - 1];


        console.log('ObjectDetails');
        console.log(cube);

        ObjectDetails.create({
            sizeX: cube.scale.x,
            sizeY: cube.scale.y,
            sizeZ: cube.scale.z,
            object_id: $scope.currentObject._id
        });

        $window.location.href = '#objectEdit3';
        // });
    };


    //THREE  ACTIONS

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