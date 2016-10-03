(function() {
	var projects = [{
		name: "Pop Writer",
		url: "www.pop-writer.com",
		img: "./img/popwriter.png"
	},{
		name: "Movies App",
		url: "www.themoviesapp.xyz",
		img: "./img/movies.png"
	},{
		name: "Twitter Heat Map",
		url: "whttps://github.com/Sushi1985/Twitter-Heat-Map",
		img: "./img/twitter.png"
	},{
		name: "Imp.nyc",
		url: "www.imp.nyc",
		img: "imp.png"
	}];

	var $projects = projects.reduce(function(a, b){
		return a + "<div class='project'><a href=" + b.url + "><img src=" + b.img + "/></a><div class='project-title'>" + b.name + "</div></div>";
	}, '');

	function addToLightBox(domElement){
		return  $('<div class="lightbox">' + domElement + '</div>');
	}
})();