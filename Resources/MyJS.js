$(document).ready(function(){

	$("#ImageScroller ul li img").click(function(){
		showImg($($(this).attr("target")));
		})

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


	setInterval(function(){
		if ($("#ImageScroller>img.current").next("#ImageScroller>img").length == 0) {
			showImg($("#ImageScroller>img:nth-child(1)"));
			return;	
		}
			showImg($("#ImageScroller>img.current").next("#ImageScroller>img"));
		}, 5000);
}