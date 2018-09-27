
angular.module('starter')
.controller('LoginController', function($http, $scope, CarroService, $ionicPopup, $state, $rootScope){

	$scope.login = {};

	$scope.realizarLogin = function(){

		$rootScope.usuario = {
			cns : $scope.login.cns,
			senha : $scope.login.senha
		};
		
		$state.go('app.listagem');

	}


});