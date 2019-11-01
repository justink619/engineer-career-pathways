/*jslint browser: true*/
/*global $, jQuery, alert*/



$(function () {
    
    "use strict";
	
	$('.slider').hide().last().show();

    
    $('.test li').click(function(){
        $('.test li').removeClass('slct');
        $(this).addClass('slct');
        
        var attrId = $(this).attr('id');
        $('.slider').fadeOut();
        $('#' + attrId + "-text").appendTo('.rotate-container').fadeIn();
    });
    
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 60) {
            $(".nav").addClass('active');
            //$("img#white").fadeOut(500);
            //$("img#dark").fadeIn(500);
        } else {
            $(".nav").removeClass('active');
            //$("img#white").fadeIn(500);
            //$("img#dark").fadeOut(500);
        }
        
        
        var wintop = $(window).scrollTop(),
            winheight = $(".wrapper, .wrapper2").height(),
            totalScroll = (wintop / winheight) * 100;
        
        $(".progressbar").css("width", totalScroll + "%");
        
    });
    
    
	
	
	
	
	$(window).scroll(function() {
    	if ($(this).scrollTop() >= 2080) {        // If page is scrolled more than 50px
        	$('#return-to-wheel').fadeIn(200);    // Fade in the arrow
    	} else {
        	$('#return-to-wheel').fadeOut(200);   // Else fade out the arrow
    	}
		});
			$('#return-to-wheel').click(function() {      // When arrow is clicked
    		$('body,html').animate({
        	scrollTop : $("#impactWheel").offset().top                       // Scroll to top of wheel
    }, 500);
	
	});
	
	
	
	// Show/Hide
	
		$('.jobs').hide();

    
    $('.title-links li').click(function(){
        var attrId = $(this).attr('id');
        $('.jobs').hide();
		var newAttr = $('#' + attrId + "-content");
        newAttr.show();
		
		$('html,body').animate({
        	scrollTop: newAttr.offset().top
    	}, 500);
    });


    
	$('#return-to-wheel').click(function() {      // When arrow is clicked
    		$('body,html').animate({
        	scrollTop : $("#impactWheel").offset().top                       // Scroll to top of wheel
    }, 500);	
	});
		

    

      
});