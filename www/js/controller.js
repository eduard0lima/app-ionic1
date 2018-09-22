angular.module('starter')
.controller('ListagemController', function($scope, CarroService) {

	CarroService.obterCarros().then(function(dados) {
		$scope.listaDeCarros = dados;
	});

});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope) {

	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.acessorios = [
							{"nome": "Freio ABS", "preco": 500}, 
							{"nome": "Ar Cond.", "preco": 1000},
							{"nome": "MP3", "preco": 800}
						];

	$scope.mudou = function(acessorio) {

		if (acessorio.isMarcado) {
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
		} else {
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
		}
	};

});

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService) {

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);

	$scope.pedido = {};

	$scope.finaliarPedido = function () {

		var pedidoFinalizado = {
			params : {
				carro : $scope.carroFinalizado.nome,
				preco : $scope.carroFinalizado.preco,
				nome : $scope.pedido.nome,
				endereco : $scope.pedido.endereco,
				email : $scope.pedido.email
			}
		}

		CarroService.salvarPedido(pedidoFinalizado).then(function() {
			$ionicPopup.alert({
			    title: 'Parabéns!',
			    template: 'Você acaba de comprar um carro.'
		    }).then(function () {
		    	$state.go('listagem');
		    });
		}, function() {
			$ionicPopup.alert({
			    title: 'Erro!',
			    template: 'Campos obrigatórios.'
		    });
		})

	}

});