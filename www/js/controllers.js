angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPopup,$timeout,$cordovaSQLite) {
    $scope.showAlert=function(){
        var alertPopup=$ionicPopup.alert({
            title:'Agenda',
            template:'Datos Guardados'
        });
    }
    $scope.guardar=function(persona){
        $cordovaSQLite.execute(db,'INSERT INTO agenda(nombre,apellido,telefono,email)VALUES(?,?,?,?)',[persona.nombre,persona.apellido,persona.telefono,persona,email]).then(function(result)
        {
            $scope.statusMessage="Registro Guardado!";
            }, function(error){
                $scope.statusMessage="Error al guardar:"+error.message;
            })
    }
})

.controller('ChatsCtrl', function($scope, Chats,$cordovaSQLite) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.getAll=function(){
      $scope.chats=chats.all();
  };
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$cordovaSQLite) {
  $scope.persona = Chats.get($stateParams.chatId);
  scope.guardar=function(persona){
      $cordovaSQLite.execute(db,'UPDATE agenda set nombre=?,apellido=?,telefono=?,email=? where id=?',
      [persona.nombre,persona.apellido,persona.telefono,persona.email,persona.id])
      .then (function(result) {
        $scope.statusMessage="Registro Guardado!";  
      },function(error){
          $scope.statusMessage="Error al guardar:"+ error.message;
      })
      console.log("NOMBRE:" + persona.nombre);
      console.log("ID:" + persona.id);
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
