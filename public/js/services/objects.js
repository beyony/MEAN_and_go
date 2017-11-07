angular.module('objectService', [])

// super simple service
// each function returns a promise object
    .factory('Objects', ['$http', function($http) {
        return {
            get : function() {
                return $http.get('/api/objects');
            },
            create : function(todoData) {
                return $http.post('/api/objects', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/objects/' + id);
            }
        }
    }]);