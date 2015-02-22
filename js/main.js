$( document ).ready(function() {
	$(window).on('scroll', function(){
		var top = $(window).scrollTop();
		console.log(top);

		if (top > 500) {
			$('#navigation').addClass('fixed');
		}
		else {
			$('#navigation').removeClass('fixed');
		}
	});
});