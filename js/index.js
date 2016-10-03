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

		//RESUME BUTTON
		// create the resume dom Element and attach it to a display none lightbox that will fade/in at resume btn onclick
		var $resume = '<Object data="./img/resume.pdf" type="application/pdf" width="70%" height="100%""></Object>';
		$resume = addToLightBox($resume);
		addOnClickEvent($resume);

		//PROJECTS BUTTON
		//create the projects lightbox component and add onlickevent.

		var projects = [{
			name: "Pop Writer",
			url: "http://www.pop-writer.com",
			img: "img/popwriter.png"
		},{
			name: "Movies App",
			url: "www.themoviesapp.xyz",
			img: "img/movies.png"
		},{
			name: "Twitter Heat Map",
			url: "https://github.com/Sushi1985/Twitter-Heat-Map",
			img: "img/twitter.png"
		},{
			name: "Imp.nyc",
			url: "www.imp.nyc",
			img: "img/imp.png"
		}];

		var $projects = projects.reduce(function(a, b){
			return a + "<div class='project'><a href=" + b.url + "><img src=" + b.img + " /></a><div class='project-title'>" + b.name + "</div></div>";
		}, '');

		$projects = addToLightBox($projects);
		addOnClickEvent($projects);

		//BUTTONS onclick actions
		//action when clicking on the buttons
		$('.btn').click(function(){
			switch($(this)[0].innerHTML) {
				case 'RESUME':
					appendToScreenAndAnimate($resume);
					break;
				case 'PROJECTS':
					appendToScreenAndAnimate($projects);
					break;
				case 'ABOUT':
					console.log('About');
					break;
			}
		});

		//HELPER FUNCTIONS
		
		function addToLightBox(domElement){
			return  $('<div class="lightbox">' + domElement + '</div>');
		}

		function addOnClickEvent(domElement) {
			domElement.on('click', function(e){
				$(this).animate({opacity: 0}, 500, function(){
					$(this).detach();
				});
			});
		}

		function appendToScreenAndAnimate(domElement) {
			$('#screen').append(domElement);
			domElement.animate({opacity: 1}, 500);
		}

	})();

});