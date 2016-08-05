 app.controller("palindromeCtrl", function(){
 	var self = this;

 	self.checkWord = function(word) {
 		var temp = '';
 		var result = false;

 		word = word.replace(/\s+/g, '');

 		for (var i = word.length-1; i >= 0; i--) {
 			temp += word[i];
 		}

 		if(temp.toLowerCase() === word.toLowerCase()) {
 			result = true;
 		}

 		self.setBackground(result);

 		console.log(result);
 		console.log(temp);
 	}

 	self.setBackground = function(bool) {
 		var ele = $('.word');

 		if(true == bool) {
 			ele.css('background-color', 'green');
 		} else {
 			ele.css('background-color', 'red');
 		}
 	}
 });