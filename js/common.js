head.ready(function() {	
	$('.js-nextstep').click(function(event) {
		event.preventDefault();
		$('.toggleme').toggle();
	});
	$('.popup__close,.overlay').click(function(event) {
		event.preventDefault();
		$('.popup').removeClass('is-visible');
		$('.overlay').fadeOut();
	});
	$('.popup__menu a').click(function(event) {
		event.preventDefault();
		$('.popup__menu a').removeClass('is-selected-popup__link');
		$(this).addClass('is-selected-popup__link');
	});
	$('.js-popup').click(function(event) {
		event.preventDefault();
		idd = $(this).data('popup');
		$('#'+idd).addClass('is-visible');
		$('.overlay').fadeIn();
	});

	$('body').addClass('a');
	$('.news__link-year').click(function(event) {
		event.preventDefault();
        idd = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(idd+'').offset().top -30
        }, 500);
        $('.news__link-year').removeClass('is-selected__year');
        $(this).addClass('is-selected__year');
	});
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.tabs__mark').click(function(event) {
		event.preventDefault();
		$('.tabs__mark').removeClass('is-active__mark');
		$(this).addClass('is-active__mark');
		$('.bb').hide();
		idd = $(this).data('toshow');
		$('#'+idd).show();
	});
	$(".catalog4-2-left,.tofix").sticky({topSpacing:10});
	if($('.pg__menu').length){
		gotomenu($( ".pg__menu li" ).index( $('.pg__menu li.is-active')));
		function gotomenu(n){
			$('.pg__menuline')
				.css('left',$('.pg__menu li').eq(n).position().left)
				.css('width',$('.pg__menu li').eq(n).children('a').width());
		}

		$('.pg__menu li').hover(function() {
			gotomenu($( ".pg__menu li" ).index( $(this) ));
		}, function() {
			gotomenu($( ".pg__menu li" ).index( $('.pg__menu li.is-active')));
		});
	}

});