/* ===============
   	INDICE 
------------------------------

1 * Parallax //
2 * Canvas Menú //
3 * Menú scroll effect //



=================*/



/*-----------------------------
1 * Parallax //
-----------------------------*/

$(window).scroll(function() {
	var scroll = $(window).scrollTop();            
	$(".parallax").css("transform","translateY(" +  (scroll)/-10  + "px)");
	$(".parallax").css("margin-bottom", ""+ (scroll)/-5 + "px");
	$(".icon-down").css("position", "relative");
	$(".icon-down").css("top", ""+ (scroll)/-20 + "px");
	$(".about-fron-in").css("opacity", "1"- (scroll)/200 + "0");
});


/*-----------------------------
2 * Canvas Menú //
-----------------------------*/

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

/*-----------------------------
3 * Menú scroll effect //
-----------------------------*/

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 180) {
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