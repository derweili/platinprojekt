$( document ).ready(function() {
	$( "#marennav" ).click(function() {
	  $( "#members" ).removeClass("hessi fabi jack fabi weili");
	  $( "#members" ).addClass("maren");
	});
	$( "#hessinav" ).click(function() {
	  $( "#members" ).removeClass("fabi maren weili jack weili");
	  $( "#members" ).addClass("hessi");
	});
	$( "#weilinav" ).click(function() {
	  $( "#members" ).removeClass("hessi fabi jack fabi maren");
	  $( "#members" ).addClass("weili");
	});
	$( "#fabinav" ).click(function() {
	  $( "#members" ).removeClass("hessi fabi jack maren weili");
	  $( "#members" ).addClass("fabi");
	});
	var scrollPos = $(document).scrollTop();
		console.log(scrollPos);
	if ( scrollPos > 1 ) {
		$( ".topnav" ).addClass( "sticky" );
	}else{
		$( ".topnav" ).removeClass( "sticky" );
	};


	$( window ).scroll(function() {
		var scrollPos = $(document).scrollTop();
		console.log(scrollPos);
		if ( scrollPos > 1 ) {
			$( ".topnav" ).addClass( "sticky" );
		}else{
			$( ".topnav" ).removeClass( "sticky" );
		};
	});

});



$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
      
      	var myOff =  $target.offset().top -48;

	    $('html, body').stop().animate({
	        'scrollTop': myOff
	    }, 900, 'swing', function () {

	    });
	});
}); 
  
// then on window load scroll to the called anchor (that will trigger the window scroll 
// so your upper menu can appear again)
$(window).load(function() {
  if (window.location.hash){ 
    	var target = window.location.hash;
    	var $target = $(target);
    
    	var myOff = $target.offset().top -48
    
	    $('html, body').stop().animate({
	        'scrollTop': myOff
	    }, 900, 'swing', function () {

	    });
 }
});