$(document).ready(function(){

	(function(){
		var buttonsInfo = [
			{ title: 'RESUME', href:'#resume' },
			{ title: 'PROJECTS', href:'#projects' },
			{ title: 'ABOUT' , href: '#about'}];

		//create the buttons and append them to the #buttons dom Element
		var $buttonsArray = buttonsInfo.map(function(obj) {
			return $("<button class='btn' href="+ obj.href +">" + obj.title + "</title>");
		});

		$('#buttons').append($buttonsArray); 

		//animate the buttons on mouseenter and leave

		$('.btn').on("mouseenter", function(){
			$(this).animate({"width" : "450px"}, 200)
		}).on("mouseleave", function(){
			$(this).animate({"width" : "400px"}, 300)
		});

	})();

});