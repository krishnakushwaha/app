'use strict';

/**
 * @ngdoc service
 * @name frontApp.mdservice
 * @description
 * # mdservice
 * Service in the frontApp.
 */
angular.module('appList')
  .service('contaservice',['$http', function($http) {
        var Home = (function() {
            var service = function() {
                this.urls = {
                    home: '/contactlist/',
                   
                };
            };

            service.prototype.getDATA = function(id) {
                //console.log(params);
               
                return $http.get(this.urls.home+id)
                    .then(function(data) {
                      //console.log(data.data);
                        return data;
                    });
            };

            
           

            return service;
        })();
        return new Home();
    }]);