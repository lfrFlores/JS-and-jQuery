$(function(){
	var $h1 =$('h1');
	$h1.addClass('danger');
	
	setTimeout(function(){
		$h1.removeClass('danger');
	},1500)
})
