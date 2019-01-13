$(document).ready(function(){
	var video = document.querySelector("#camera");
	
	if (navigator.mediaDevices.getUserMedia) {       
		navigator.mediaDevices.getUserMedia({video: true})
		.then(function(stream) {
		video.srcObject = stream;
		
	  })
		.catch(function(err0r) {
		console.log("Something went wrong!");
		});
	}
	
	
	
	$("#capture").click(function() {
	
		// alert("hi");
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext('2d');
		canvas.width = video.width;
		canvas.height = video.height;
		video.pause();
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		
	
		// var dataURL = canvas.toDataURL();
		
		// alert(dataURL);
	
	});
	

});
	
	

