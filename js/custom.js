



$(document).ready(function(){	
	$('.mobile-menu-icon').click(function(event) {
		$(this).toggleClass('active');
		$(".main-header .nav-menu").toggleClass('active');
		$('body').toggleClass('show-menu');
	});
	$('.mobile-search-icon').click(function(event) {
		$('body').toggleClass('show-search');
	});	
	$('.header_search_button').click(function(event) {
		$('body').removeClass('show-search');
	});	
	$('.menu-item > a').click(function(event) {
		$(this).closest('.menu-item').toggleClass('active');
	});
	// $('.nav-menu ul li a').click(function(event) {
	// 	$('body').removeClass('show-menu');
	// });	

	
	if($('.six-item-slider').length > 0) {
		$('.six-item-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 6
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
	if($('.five-item-slider').length > 0) {
		$('.five-item-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}

	// scroll to top 
	var btn = $('#backToTop');
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '1000');
	});	
});
$(window).on('resize', function() {
	if($('.six-item-slider').length > 0) {
		$('.six-item-slider').slick('resize');
	}
	if($('.five-item-slider').length > 0) {
		$('.five-item-slider').slick('resize');
	}
});