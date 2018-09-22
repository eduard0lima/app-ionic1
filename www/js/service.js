angular.module('starter')
.service('CarroService', function($http) {

	var url = 'http://aluracar.herokuapp.com/';

	return {
		obterCarros : obterCarros,
		salvarPedido : salvarPedido
	}

	function obterCarros()  {
		return $http.get(url).then(function(response) {
			return response.data;
		});
	}

	function salvarPedido(pedido)  {
		return $http.get(url + 'salvarpedido', pedido).then(function(response) {
			return response;
		});
	}

}); 