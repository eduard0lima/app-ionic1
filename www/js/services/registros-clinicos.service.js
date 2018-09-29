(function () {

    'use strict';

    angular.module('starter')
        .service('RegistrosClinicosService', function ($http) {

            var urlBase = 'http://127.0.0.1:8080';
            var urlGetDocuments = urlBase + '/getDocuments';

            return {
                obterRegistros: obterRegistros
            }

            function obterRegistros(cns) {
                return $http({
                    method: 'GET',
                    url: urlGetDocuments,
                    timeout: 10000000,
                    params: {
                        cns: cns,
                        currentPage: 0,
                        pageSize: 100
                    }
                });
            }

        });

})();