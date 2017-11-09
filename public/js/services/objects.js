// angular.module('objectService', [])
//
// // super simple service
// // each function returns a promise object
//     .factory('Objects', ['$http', function($http) {
//         return {
//             get : function() {
//                 return $http.get('/api/objects');
//             },
//             create : function(todoData) {
//                 return $http.post('/api/objects', todoData);
//             },
//             delete : function(id) {
//                 return $http.delete('/api/objects/' + id);
//             }
//         }
//     }])
//     .factory('ObjectDetails', ['$http', function($http) {
//     return {
//         get : function(id) {
//             return $http.get('/api/objectDetails/' + id);
//         },
//         create : function(detailsData) {
//             return $http.post('/api/objectDetails', detailsData);
//         },
//         delete : function(id) {
//             return $http.delete('/api/objectDetails/' + id);
//         }
//     }
// }]);