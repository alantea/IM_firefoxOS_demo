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

	/*$('#send').click(function(){
		text = $("textarea[name='userchat']").val();
		$("#chatcontact").append("<div class=\"chat\">" + text + "</div>");
		$("textarea[name='userchat']").val("");
	});*/
    
    /*var pickImage = document.querySelector(".icon-attachment");
    if (pickImage) { 
        pickImage.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: ["image/png", "image/jpg", "image/jpeg"]
                }
            });

            pick.onsuccess = function () {
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                //var imagePresenter = document.querySelector("#chatcontact"); //image-presenter
                //img.style.height = 20%;
                //img.style.width = 40%
                //imagePresenter.appendChild(img);
                $("#chatcontact").append("<div class=\"pic\"><img src=" + img.src + "></div>");
                //imagePresenter.style.display = "block";
            };

            pick.onerror = function () {
                alert("Can't view the image!");
            };
        }
    }*/

    var pickAnything = document.querySelector(".icon-attachment");
    if (pickAnything) { 
        pickAnything.onclick = function () {
             var pickAny = new MozActivity({
                 name: "pick"
             });

            pickAny.onsuccess = function () {
                var img = document.createElement("img");
                if (this.result.blob.type.indexOf("image") != -1) {
                    img.src = window.URL.createObjectURL(this.result.blob);
                    $("#chatcontact").append("<div class=\"pic\"><img src=" + img.src + "></div>");
                }
            };

            pickAny.onerror = function () {
                console.log("An error occurred");
            };
        }
    }
});