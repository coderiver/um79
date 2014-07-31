head.ready(function() {	

	$('.sorting__link').click(function(event) {
		event.preventDefault();
		if($(this).hasClass("is-active")){
			$(this).toggleClass('is-rotated');
		}
		else{
			$('.sorting__link').removeClass('is-active');
			$(this).addClass('is-active');
		}
	});
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
	// $('.news__link-year').click(function(event) {
	// 	event.preventDefault();
 //        idd = $(this).attr('href')
 //        $('html, body').animate({
 //            scrollTop: $(idd+'').offset().top -30
 //        }, 500);
 //        $('.news__link-year').removeClass('is-selected__year');
 //        $(this).addClass('is-selected__year');
	// });
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


	$(document).on("scroll", onScroll);
	
	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");
	    
	    $('.news__link-year').each(function () {
	        $(this).removeClass('is-active');
	    })
	    $(this).addClass('is-active');
	  
	    var target = this.hash,
	        menu = target;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top+2
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.news__link-year').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.news__link-year').removeClass("is-active");
	            currLink.addClass("is-active");
	        }
	        else{
	            currLink.removeClass("is-active");
	        }
	    });
	}

});



