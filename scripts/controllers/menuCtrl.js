app.controller('menuCtrl', ['$location', function($location) {
	var self = this;

	self.menuNames = [
		{name: 'Home'},
		{name: 'Portfolio'},
		{name: 'Directives'},
		{name: 'Services'},
		{name: 'Controllers'}
	];

	self.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	}

	self.clearSelected = function() {
		self.selected = '';
		$(".menu-wrapper a").each(function(){
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
			}
		});
	}
}]);