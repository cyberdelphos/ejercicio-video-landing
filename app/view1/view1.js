'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  /* Animación para el título en el landing */
  TweenMax.from("#landing-title-message", 2, {left: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
  /* Animación para el mensaje en el landing */
  TweenMax.from("#landing-body-message", 1, {top: 50, opacity: 0, position: 'relative', ease: Power3.easeOut, delay: 2});
  /* Animación para los botones */
  TweenMax.from(".landing-body-buttons", 1, {scale: 0, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), delay: 3})
}]);