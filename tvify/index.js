$(function(){
	// Submit search form

	$('#app-body')
	.find('form')
	.submit(function(ev){
		ev.preventDefault();
		alert('se hizo submit');
	})
})
