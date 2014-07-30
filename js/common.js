head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	
	$(".catalog4-2-left").sticky({topSpacing:10});

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