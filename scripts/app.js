var app = angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {templateUrl: '../views/partials/home-partial.html'})
	.when('/directives', {templateUrl: '../views/partials/directives.html'})
	.when('/controllers', {templateUrl: '../views/partials/controllers.html'})
	.when('/services', {templateUrl: '../views/partials/services.html'})
	.when('/portfolio', {templateUrl: '../views/partials/portfolio.html'})
	.otherwise({redirectTo: '/portfolio'})
}]);