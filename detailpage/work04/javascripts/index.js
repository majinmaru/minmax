$(document).ready(function(){
	/*$('.content-btn').click(function(e){
		e.preventDefault();
		var currentIndex = $(this).index();
		$('.content-btn').eq(currentIndex).addClass('on');
		$('.content-btn').eq(currentIndex).siblings().removeClass('on');

		$('.img-promo').eq(currentIndex).addClass('on');
		$('.img-promo').eq(currentIndex).siblings().removeClass('on');
	});
	*/
	/* 이전 팝업 열기
	var openPopup = function() {
		$(".content-detailpage").show();
		$(".container").on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	}
	*/

	/* 이전 팝업 닫기
	var closePopup = function() {
		$(".content-detailpage").hide();
		$(".container").off('scroll touchmove mousewheel');
	}
	*/

	$(".detailpage-show").mCustomScrollbar({
    	theme:"dark"
	});


	var posY;

	var openPopup = function() {
		posY = $(window).scrollTop();
		$(".content-detailpage").show();
		$("html, body").addClass("not-scroll");
		$(".container").css("top", -posY);
	}

	
	var closePopup = function() {
		$(".content-detailpage").hide();
		$("html, body").removeClass("not-scroll");
		$(".container").css("top", "0");
		posY = $(window).scrollTop(posY);
	}
	



	$(".thumbnail").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		var imageIndex = getIndex + 1;
		$(".show-img").append('<img src="./images/detail-0' + imageIndex + '.jpg" />')
		openPopup();
	});


	$(".detailpage-exit").click(function(e){
		e.preventDefault();
		$(".show-img *").remove();
		closePopup();
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