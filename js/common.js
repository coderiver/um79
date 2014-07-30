head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	gotomenu($( ".pg__menu li" ).index( $('.pg__menu li.is-active')));
	function gotomenu(n){
		console.log('goto'+n);
		$('.pg__menuline')
			.css('left',$('.pg__menu li').eq(n).position().left)
			.css('width',$('.pg__menu li').eq(n).children('a').width());
	}

	$('.pg__menu li').hover(function() {
		gotomenu($( ".pg__menu li" ).index( $(this) ));
		console.log($('.pg__menu li').eq(2).position().left);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		gotomenu($( ".pg__menu li" ).index( $('.pg__menu li.is-active')));

	});

});