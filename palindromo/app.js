(function (){
	'use strict'

	angular
		.module('palindromo',[])
		.controller('palindromoCtrl',palindromoCtrl);

		function palindromoCtrl(){
			var p = this;
			p.validar = validar;
			p.result = '';

			function validar(){
				var c = p.texto
						.replace(/ /g,'')
						.toLowerCase()
						.split('')
						.reverse()
						.join('');

					if(p.texto.toLowerCase().replace(/ /g,'') == c){
						p.result = 'Esto es un palindromo'
					}else{
						p.result = 'Esto no es un palindromo'
					}
			}
		}
})();