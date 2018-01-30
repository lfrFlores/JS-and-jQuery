$(function(){
	var a = $('<a>',{
		href: 'https://facebook.com',
		target: '_blank',
		html: 'Ir a Facebook'
	 }) 
	$('#app-body').append(a);

	console.log(a.attr('href'))
})
