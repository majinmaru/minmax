$(document).ready(function(){
	$('.cards').slick({
		infinite: true,
	    slidesToShow: 4,
	    prevArrow: $('.button.back'),
	    nextArrow: $('.button.next'),
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