$(document).ready(function(){


	$("#th1").click(function(){
		showImg($("#Image1"));
		
	});

	$("#th2").click(function(){
		showImg($("#Image2"));
	});

	$("#th3").click(function(){
		showImg($("#Image3"));
	});

	slideShow();

});

function showImg(elem)
{
	if (elem.hasClass("current")) 
		return;

	$(".previous").removeClass("previous");
	$(".current").addClass("previous");
	$(".current").removeClass("current");
	elem.hide();
	elem.fadeIn();
	elem.addClass("current");
}

function slideShow(){

	var I1 = true;
	var I2 = false;
	var I3 = false;


	setInterval(function(){
		if ($("#ImageScroller>img.current").next("#ImageScroller>img").length == 0) {
			showImg($("#ImageScroller>img:nth-child(1)"));
			return;	
		}
		showImg($("#ImageScroller>img.current").next("#ImageScroller>img"));
	}, 5000);
}