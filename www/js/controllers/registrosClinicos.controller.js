(function () {

    'use strict';

    angular.module('starter')
        .controller('RegistrosClinicosController', function ($rootScope, RegistrosClinicosService) {

            var vm = this;
            vm.registrosClinicos = [];
            obterRegistros();

            function obterRegistros() {
                return RegistrosClinicosService.obterRegistros($rootScope.usuario.cns).then(function (result) {
                    return vm.registrosClinicos = result.data;
                });
            }


        });

})();