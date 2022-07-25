$(document).ready(function(){
	$(function(){
		$(".introduce-email").click(function(){
			$(".introduce-emailtxt").select();
			document.execCommand("copy");
			alert("클립보드에 복사되었습니다");
		});
	});
});