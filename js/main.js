$( document ).ready(function() {

	$(window).on('scroll', function(){

		$(window).scroll(function(){
			$nav = $('#navigation'); 
			if ($(this).scrollTop() > 500 && $nav.css('position') != 'fixed')
			{ 
				$('#navigation').css({'position': 'fixed', 'top': '0px'}); 
				$('#about.container-fluid').css({'margin-top': '40px'});
			}
			if ($(this).scrollTop() < 500 && $nav.css('position') == 'fixed')
			{
				$('#navigation').css({'position': 'static', 'top': '0px'});
				$('#about.container-fluid').css({'margin-top': '0px'});
			} 
		});
	});

	// $(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		// $('a').each(function () {
		// 	$(this).removeClass('active');
		// })
		// $(this).addClass('active');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			// $(document).on("scroll", onScroll);
		});
	});
});

// function onScroll(event){
// 	var scrollPosition = $(document).scrollTop();
// 	$('#navigation a').each(function () {
// 		var currentLink = $(this);
// 		var refElement = $(currentLink.attr("href"));
// 		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
// 			$('#navigation a').removeClass("active");
// 			currentLink.addClass("active");
// 		}
// 		else {
// 			currentLink.removeClass("active");
// 		}
// 	});
// }
