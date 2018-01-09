'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('appList')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test="krishna";
  });
