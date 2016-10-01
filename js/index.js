$(document).ready(function(){

	(function(){
		var buttonsInfo = [
			{ title: 'RESUME'},
			{ title: 'PROJECTS' },
			{ title: 'ABOUT'}];

		// var $resume = $("<embed src='./img/resume.pdf'></embed>");
		var $resume = $('<object data="./img/resume.pdf" type="application/pdf" width="80%" >');

		//create the buttons and append them to the #buttons dom Element
		var $buttonsArray = buttonsInfo.map(function(obj) {
			return $("<button class='btn'>" + obj.title + "</title>");
		});

		$('#buttons').append($buttonsArray); 

		//animate the buttons on mouseenter and leave

		$('.btn').on("mouseenter", function(){
			$(this).animate({"width" : "450px"}, 200)
		}).on("mouseleave", function(){
			$(this).animate({"width" : "400px"}, 300)
		});

		//action when clicking on the buttons
		$('.btn').click(function(){
			switch($(this)[0].innerHTML) {
				case 'RESUME':
					 $("#screen").append($resume);
					console.log('resume');
					break;
				case 'PROJECTS':
					console.log('projects');
					break;
				case 'ABOUT':
					console.log('About');
					break;
			}
		});

	})();

});