app.controller('menuCtrl', function() {
	var self = this;
	self.selected = '';

	self.menuNames = [
		{name: 'Home'},
		{name: 'Directives'},
		{name: 'Controllers'},
		{name: 'Services'},
		{name: 'Portfolio'}
	];

	self.isActive = function(name) {
		self.selected = name;
	}

	self.isSelected = function(name) {
		return self.selected === name;
	}

	self.clearSelected = function() {
		self.selected = '';
		$(".menu-wrapper a").each(function(){
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
			}
		});
	}
});