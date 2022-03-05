$(document).ready(function(){
	//$("body").niceScroll();
	/*
	$(".dropdown").hover(function(e){
		e.preventDefault();
		$(".tri img").attr("src", "../common/images/dropdown-active.png");
	})
	*/
	$(".dropdown").click(function(e){
		e.preventDefault();
		var dropdown = $(".dropdown");
		if(dropdown.hasClass('active')){
			dropdown.removeClass('active')
			$(".tri img").attr("src", "https://majinmaru.github.io/minmax/common/images/dropdown-normal.png");
			$(".mobile-dropdown").removeClass('active')
			//$(".mobile-dropdown").animate({ 
			//	height: "0" 
			//}, 500, function(){
			//	$(".mobile-dropdown").css('height', '0');
			//	$(".mobile-dropdown").removeClass('active');
			//});
		} else {
			dropdown.addClass('active')
			$(".tri img").attr("src", "https://majinmaru.github.io/minmax/common/images/dropdown-active.png");
			$(".mobile-dropdown").addClass('active');
			//$(".mobile-dropdown").animate({
			//	display: 'block',
			//	height: 'calc(100vh - 7.5rem)'
			//}, 500, function(){
			//	$(".mobile-dropdown").addClass('active');
			//});
		}
	});
});
/*
$(document).ready(function(){
	
	var topbtnAppear = function() {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();

		if(scrollTop > windowHeight){
			$(".topbtn").addClass("appear");
		} else {
			$(".topbtn").removeClass("appear");
		}
	}

	$(".topbtn").click(function(e){
		e.preventDefault();
		//$(window).scrollTop(0);
		$('html, body').animate({
            scrollTop : 0
        }, 1000);
	})

	$(window).scroll(function() {
		topbtnAppear();
	});
});
*/