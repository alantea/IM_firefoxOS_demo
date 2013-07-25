$(document).ready(function(){
	
	$('#unregister').click(function(){
		$('#registerpage').attr('aria-hidden', 'false');
   		$('#loginpage').attr('aria-hidden', 'true');
   		$('#registerpage').addClass('slide-up-in');
   		$('#loginpage').addClass('slide-down-out');
   		$('#registerpage').removeClass('slide-down-out');
   		$('#loginpage').removeClass('slide-up-in');
	});

	$('.icon-back').click(function(){
		$('#registerpage').attr('aria-hidden', 'true');
   		$('#loginpage').attr('aria-hidden', 'false');
   		$('#loginpage').removeClass('slide-down-out');
   		$('#registerpage').removeClass('slide-up-in');
   		$('#registerpage').addClass('slide-down-out');
   		$('#loginpage').addClass('slide-up-in');
	});

	$('#friend_link').click(function(){
		$('#friendpage').attr('aria-hidden', 'false');
   		$('#mainpage').attr('aria-hidden', 'true');
   		$('#mainpage').addClass('slide-up-in');
	});

	$('#addfriend').click(function(){
		$('#friendpage').attr('aria-hidden', 'true');
		$('#addpage').attr('aria-hidden', 'false');
		$('#friendpage').addClass('slide-down-out');
		$('#addpage').addClass('slide-up-in');
	});

	$('#send').click(function(){
		text = $("textarea[name='userchat']").val();
		$("#chatcontact").append("<div class=\"chat\">" + text + "</div>");
		$("textarea[name='userchat']").val("");
	});
    
});