$(function(){
	$(window).scroll(function() {
		        if($(this).scrollTop() > 75){
		            $('#header').addClass('header-scroll');
		            $("#slideBar2").stop().show();
		        } else {
		            $('#header').removeClass('header-scroll');
		            $("#slideBar2").stop().hide();
		        }
		    });
	$(".ewm").hover(function(){
				$(".ewm .barImg").css({backgroundColor:"#c80900"});
				$(".ewm2").stop().slideDown();
			},function(){
				$(".ewm .barImg").css({backgroundColor:"#7f7f7f"});
				$(".ewm2").stop().slideUp();
			})
			$(".tel").hover(function(){
				$(".tel span").addClass("active").stop().slideDown();
			},function(){
				$(".tel span").removeClass("active").stop().slideUp();
			})
			
			$(".goTop").click(function(){
				$(window).scrollTop(0);
			})
})
