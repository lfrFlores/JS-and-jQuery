$(function(){
	// Submit search form

	$('#app-body')
	.find('form')
	.submit(function(ev){
		alert('se hizo submit');
	})
})
