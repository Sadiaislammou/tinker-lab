$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 20) {
	    $(".black").css("background" , "linear-gradient(to left, #9F44B6 , #543597)");
	  }

	  else{
		  $(".black").css("background" , "none");  	
	  }
  })
})