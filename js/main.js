$( document ).ready(function() {

	$(window).on('scroll', function(){

		$(window).scroll(function(){
			var top = $(this).scrollTop();
			console.log(top);

			$nav = $('#navigation'); 
			if ($(this).scrollTop() > 500 && $nav.css('position') != 'fixed')
			{ 
				$('#navigation').css({'position': 'fixed', 'top': '0px'}); 
				$('#about.container-fluid').css({'padding-top': '64px'});
			}
			if ($(this).scrollTop() < 500 && $nav.css('position') == 'fixed')
			{
				$('#navigation').css({'position': 'static', 'top': '0px'});
				$('#about.container-fluid').css({'padding-top': '2em'});
			} 

			


		});
	});

	var $root = $('html, body');
	$('a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 750, function () {
			window.location.hash = href;
		});
		return false;
	});
});