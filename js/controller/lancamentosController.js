angular.module("controleDeCustos").controller("lancamentosController", function($scope){
		$scope.lancamentos = [
							{data:"12/08/2011", descricao:"debito", valor:-10},
							{data:"12/08/2011", descricao:"credito", valor:10},
							{data:"12/08/2011", descricao:"debito", valor:-10},
							{data:"12/08/2011", descricao:"credito", valor:10}
	];

		$scope.lancamentosDebitos = [{}];
		$scope.lancamentosCreditos = [{}];
		$scope.selecionado = true;


		$scope.lancamentosDebitos = $scope.lancamentos.filter(function(debito){
			if(debito.valor < 0) return debito;
		});
		$scope.lancamentosCreditos = $scope.lancamentos.filter(function(credito){
			if(credito.valor > 0) return credito;
		});

		$scope.modificarVisualizacao = function(selecionado){
			$scope.selecionado = !selecionado;
		}

		 $scope.calcularSaldo = function(lancamentos){
			var valorTotal = 0;
			for(lancamento in lancamentos){
				if(lancamentos.hasOwnProperty(lancamento)){
					valorTotal += lancamentos[lancamento].valor ;
				}
			}
			return valorTotal
		}


})