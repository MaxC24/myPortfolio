$(document).ready(function(){

	var buttonsInfo = [
		{ title: 'RESUME', href:'#resume' },
		{ title: 'PROJECTS', href:'#projects' },
		{ title: 'ABOUT' , href: '#about'}];

	var $buttonsArray = buttonsInfo.map(function(obj) {
		return $("<button class='btn' href="+ obj.href +">" + obj.title + "</title>");
	});

	$('#buttons').append($buttonsArray); 
});