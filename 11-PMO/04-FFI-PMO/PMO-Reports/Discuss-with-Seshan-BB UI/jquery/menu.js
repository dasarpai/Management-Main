// JavaScript Document
$(document).ready(function(e) {
	
	$('#showSearchBox').click(function(e) {
        $('.search_input_container').fadeIn();
		$(this).hide();
    });
	
	$('.mobile_menu').click(function(e) {
		//alert();
		if($(window).width() <= 767){
			$('#mobile_menu').hide();
        	$('.toggle_menu').stop().slideToggle();
		}
    });
	$('.toggle_menu li a .caret').click(function(e) {
		if($(window).width() <= 767){
			
        	$(this).closest('li').find('ul').stop().slideToggle();
		}
    });
     $('.usermenu_icon').click(function(e) {
		e.preventDefault();
		var hrf = $(this).attr('href');
		//alert(hrf);
		if($(window).width() <= 767){
			$('.toggle_menu').hide();
			$(hrf).stop().slideToggle();
		}
	});

/*var userwidth = $('.user_account_container a').width();	  
$('.user_account_container a').css('left','50%');
var leftoffst = userwidth/2;*/
//alert(leftoffst);
var user = $('.user_account_container a').text();
$('.user_account_container a').hover(
	 function() {
		 if(user.toLowerCase() != 'login'){
			$(this).text("Logout");
			$(this).append('<i class="user_icon"></i>');
		 }
	  }, function() {
		$(this).text(user);
		$(this).append('<i class="user_icon"></i>');
	  }
);


});





