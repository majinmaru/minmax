$(document).ready(function(){
	
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
		$("html, body").animate({
			scrollTop: 0
		}, 400)
	});


	$('.summary-btn').click(function(e){
		e.preventDefault();
		var index = $(this).index();
		var getId = index + 1;
		$("#tab0" + getId).show();
		$("#tab0" + getId).siblings().hide();
		var contentTop = $(".warpper-content").offset().top;
		var headerHeight = $("#header").height();
		$("html, body").animate({
			scrollTop: contentTop - headerHeight
		}, 400)
	});


	$('.mp-btn').click(function(e){
		e.preventDefault();
		var index = $(this).index();
		$('.mp-content').eq(index).show();
		$('.mp-content').eq(index).siblings().hide();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var contentTop = $(".mp-wrapper").offset().top;
		var headerHeight = $("#header").height();
		$("html, body").animate({
			scrollTop: contentTop - headerHeight
		}, 400)
	});




	$(window).scroll(function() {
		floatingBtn();
	});
});