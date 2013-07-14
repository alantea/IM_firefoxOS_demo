$(document).ready(function(){
	$('#unregister').click(function(){
		$('#registerpage').attr('aria-hidden', 'false');
   		$('#loginpage').attr('aria-hidden', 'true');
   		$('#registerpage').removeClass('slide-up-in');
   		$('#registerpage').addClass('slide-up-in');
   		
	});

	$('.icon-back').click(function(){
		$('#registerpage').attr('aria-hidden', 'true');
   		$('#loginpage').attr('aria-hidden', 'false');
   		$('#loginpage').removeClass('slide-up-in');
   		$('#loginpage').addClass('slide-up-in');
	});
	
});