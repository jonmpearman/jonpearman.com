var app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: '../views/partials/home-content.html'})
	.otherwise('/', {templateUrl: '../views/partials/home-content.html'})
}]);