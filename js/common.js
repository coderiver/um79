head.ready(function() {
	$('.news__link-year').click(function(event) {
		event.preventDefault();
        idd = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(idd+'').offset().top -30
        }, 500);
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

});