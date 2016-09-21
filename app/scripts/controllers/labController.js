angular.module('AngularScaffold.Controllers')
  .controller('labController', ['labService', '$scope', '$rootScope', '$sessionStorage', '$location', '$window',
function (labService, $scope, $rootScope, $sessionStorage, $location, $window) {
    $scope.Lab = {};
    $scope.Labs = [];

    $scope.getLabs = function(){
      caseService.GetLabs().then(function(response) {
        $scope.Labs = response.data;
        console.log($scope.Labs);
      }).catch(function(err) {
        console.log(err.data);
      });
    }

    $scope.addLab = function(Lab){
      caseService.Add({
        Nombre: Lab.Name,
        Descripcion: Lab.Descripcion,
        Ubicacion: Lab.Ubicacion,
        Capacidad: Lab.Capacidad,
        id: Lab.id,
      }).then(function(response){
        $window.location.reload();
        //Materialize.toast(response.data, 3500);
      }).catch(function (err){
        if (err) {
          console.log(err.data);
          // Materialize.toast(err.data, 3500);
        }
      })
    }
    /*$scope.deleteLab = function(Lab){
      labService.Delete(Lab._id).then( function(response){
        $window.location.reload();
        //Materialize.toast(response.data, 3500);
      }).catch(function (err){
        if (err) {
          //Materialize.toast(err.data, 3500);
        }
      })
    }*/
}]);
