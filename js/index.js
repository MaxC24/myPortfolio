$(document).ready(function(){

	(function(){

		//create the buttons, append them to the dom and animate them onclick:

		var buttonsInfo = [
			{ title: 'RESUME'},
			{ title: 'PROJECTS' },
			{ title: 'ABOUT'}
		];

		var $buttonsArray = buttonsInfo.map(function(obj) {
			return $("<button class='btn'>" + obj.title + "</title>");
		});

		$('#buttons').append($buttonsArray); 

		//animate the buttons on mouseenter and leave

		$('.btn').on({
			mouseenter: function(){
				$(this).animate({"width" : "450px"}, 200);
			},
			mouseleave: function(){
				$(this).animate({"width": "400px"}, 300);
			}
		});

		// create the resume dom Element and attach it to a display none lightbox that will fade/in at resume btn onclick
		var $resume = $('<div class="lightbox"><Object data="./img/resume.pdf" type="application/pdf" width="70%" height="100%""></Object></div>');
		$resume.on('click', function(e){
			$(this).animate({opacity: 0}, 500, function(){
				$(this).detach();
			});
		});
;

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