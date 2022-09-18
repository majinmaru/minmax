$(document).ready(function(){
	$('.content-slider.project').slick({
		infinite: true,
	    slidesToShow: 2,
	    prevArrow: $('.project.back'),
	    nextArrow: $('.project.next'),
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
	$('.content-slider.promotion').slick({
		infinite: true,
	    slidesToShow: 2,
	    prevArrow: $('.promotion.back'),
	    nextArrow: $('.promotion.next'),
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
	$('.content-slider.detailpage').slick({
		infinite: true,
	    slidesToShow: 2,
	    prevArrow: $('.detailpage.back'),
	    nextArrow: $('.detailpage.next'),
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
});