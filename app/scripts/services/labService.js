angular.module('AngularScaffold.Services').factory('labService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';

		return {
      Add: function(payload){
        return $http.post(baseUrl + "v1/agregarLaboratorio", payload);
      },
      /*Delete: function(id){
        return $http.delete(baseUrl + "v1/borrarLaboratorio" + id);
      },*/
			GetLabs: function(id){
				return $http.get(baseUrl + "v1/Laboratorio/{id}");
			}
    };
}]);
