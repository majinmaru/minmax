$(document).ready(function(){
	$('.content-btn').click(function(e){
		e.preventDefault();
		var currentIndex = $(this).index();
		$('.content-btn').eq(currentIndex).addClass('on');
		$('.content-btn').eq(currentIndex).siblings().removeClass('on');

		$('.img-promo').eq(currentIndex).addClass('on');
		$('.img-promo').eq(currentIndex).siblings().removeClass('on');
	});

	var floatingBtn = function() {
		var contentsTop = $(".warpper-content").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > contentsTop){
			$(".floating").addClass("on");
		} else {
			$(".floating").removeClass("on");
		}
	}

	$('.floating-btn').click(function(e){
		e.preventDefault();
		var contentsTop = $(".warpper-content").offset().top;
		var headerHeight = $("#header").height();
		$("html, body").animate({
			scrollTop: contentsTop - headerHeight
		}, 400)
	});

	$(window).scroll(function() {
		floatingBtn();
	});
});