$(document).ready(function(){
	
	$('.menu-pc li:nth-child(2)').css({
		'font-family': 'GmarketSansMedium'
	});
	$('.menu-mo li:nth-child(2)').css({
		'font-family': 'GmarketSansMedium'
	});
	
	var topbtnAppear = function() {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();

		if(scrollTop > windowHeight){
			$(".topbtn").addClass("appear");
		} else {
			$(".topbtn").removeClass("appear");
		}
	}

	$('.cards').slick({
		infinite: true,
	    slidesToShow: 4,
	    prevArrow: $('.button.back'),
	    nextArrow: $('.button.next'),
	    variableWidth: true,
	    responsive: [
    		{
      			breakpoint: 768,
      			settings: {
        		slidesToShow: 1
        		}
        	}
    	]
	});

	$('.button.back').hover(function(){
		$('.back img').attr("src","../common/images/button-back_active.png")
	}, function(){
		$('.back img').attr("src","../common/images/button-back.png")
	})
	$('.button.next').hover(function(){
		$('.next img').attr("src","../common/images/button-next_active.png")
	}, function(){
		$('.next img').attr("src","../common/images/button-next.png")
	})
});