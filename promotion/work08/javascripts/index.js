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
	floatingBtn();
/*
	var floatingBtnClose = function() {
		var scrollHeight = $(document).height();
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop + windowHeight >= scrollHeight){
			$(".floating-close").addClass("on");
		} else {
			$(".floating-close").removeClass("on");
		} 
	}
	floatingBtnClose();
*/
	
	$('.floating-close').click(function(e){
		e.preventDefault();
		if($('.floating').hasClass('min')){
			$('.floating').removeClass('min');
			$('.floating-btn').removeClass('min');
			$('.floating-close').removeClass('min');
		} else {
			$('.floating').addClass('min');
			$('.floating-btn').addClass('min');
			$('.floating-close').addClass('min');
		}
	});


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