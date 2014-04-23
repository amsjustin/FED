$(document).ready(function(){
	loadCSS = function(href) {
		var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
		$("head").append(cssLink); 
	};
	 
	loadJS = function(src) {
		var jsLink = $("<script type='text/javascript' src='"+src+"'>");
		$("head").append(jsLink); 
	}; 
	
	if (Modernizr.touch) {   
			loadJS("jquery.bxslider.min.js"); 
			loadCSS("jquery.bxslider.css");
			
			console.log('hoi');
			$('.bxslider').bxSlider();
			$(".bxslider").css('display', "block");
			$('head').append('<link rel="stylesheet" href="jquery.bxslider.css" type="text/css" />');
	    } else {        
	}
	
});