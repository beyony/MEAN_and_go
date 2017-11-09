meanApp.controller("objectEditController3", ['$scope', '$http', 'sharedService', 'Objects', function ($scope, $http, sharedService, Objects) {

    sharedService.setProgressStep(3, 3);
    $scope.currentObject = sharedService.currentObject;



}]);