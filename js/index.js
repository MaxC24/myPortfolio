$(document).ready(function(){

	(function(){
		var buttonsInfo = [
			{ title: 'RESUME'},
			{ title: 'PROJECTS' },
			{ title: 'ABOUT'}];

		// shows the resume in a lightbox
		var $resume = $('<div class="lightbox"><Object data="./img/resume.pdf" type="application/pdf" width="70%" height="100%""></Object></div>');
		$resume.on('click', function(e){
			$(this).animate({opacity: 0}, 500, function(){
				$(this).detach();
			})
		});

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
					$resume.animate({opacity: 1}, 500);
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