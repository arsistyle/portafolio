	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();            
	  $(".parallax").css("transform","translateY(" +  (scroll)/-10  + "px)");
	  $(".parallax").css("margin-bottom", ""+ (scroll)/-5 + "px");
	});


	/*

	Canvas Menú

	*/

	$(function() {

	  var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];

	  // Toggle Nav on Click
	  $('#menu a').click(function() {

	  	$('.main').toggleClass('main-right');
	  	$('.menu-icon').toggleClass('icon-top');

	    var transitionClass = $(this).data('transition');

	    if ($.inArray(transitionClass, special) > -1) {
	      $('body').removeClass();
	      $('body').addClass(transitionClass);
	    } else {
	      $('body').removeClass();
	      $('#site-canvas').removeClass();
	      $('#site-canvas').addClass(transitionClass);
	    }

	    $('#site-wrapper').toggleClass('show-nav');

	    return false;

	  });

	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 150) {
	        $(".nav-fixed").addClass("nav-scroll");
	        $(".nav-fixed h2, .icon-up").addClass("visible-scroll");
	        $(".nav-fixed h2, .icon-up").removeClass("hidden-scroll");
	        $(".logo").addClass("hidden-scroll");
	    } else {
	        $(".nav-fixed").removeClass("nav-scroll");
	        $(".nav-fixed h2, .icon-up").removeClass("visible-scroll");
	        $(".nav-fixed h2, .icon-up").addClass("hidden-scroll");
	        $(".logo").removeClass("hidden-scroll");
	    }
	});