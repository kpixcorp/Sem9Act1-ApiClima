$(function() {
	
	var mymap = L.map('mapid').setView([-33.4488897, -70.6692655], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1Ijoia3BpeGNvcnAiLCJhIjoiY2p1aWxnZ2xnMWM0ZzQ5cGt3aHFrb29ibSJ9.Aerm4pcN9beHB2ikPQyd0Q'
	}).addTo(mymap);

	$.ajax({
		url: 'https://crossorigin.me/https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/-33.4488897,-70.6692655',
		method: 'GET',
	}).then(function(data){
		console.log(data)
	})

});