$(document).ready(function(){

		showImg($("#Image1"));

	$("#th1").click(function(){
		
		showImg($("#Image1"));
		
	});

	$("#th2").click(function(){
		
		showImg($("#Image2"));
	});

});

function showImg(elem)
{
	if (elem.css("z-index") == 900) return;
		$("#ImageScroller>img").css("z-index", 100);
		elem.hide();
		elem.css("z-index", 900);
		elem.fadeIn();
}