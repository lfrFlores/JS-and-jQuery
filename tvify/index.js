
$(function(){
	 var h1= $('#app-header').find('h1') //buscar h1 dentro de app-header
	 /*$('#app-header').has('h1')//todos los app-header que tengan h1 dentro
 	 $('#app-header').has('.title')//todos los app-header que tengan la clase title dentro
	  $('#app-header').not('.title')//todos los app-header que no tengan h1 dentro
	 
	 $('p').filter('.text') //<p class="text"></p>
	

	el siguiente jQueryObject devuelve todos los p que tengan la clase text ademas que tengan a y que me devuelva el segundo
	*/ 
	 var ps= $('p')
		.filter('.text')
		.has('a')
		.eq(1) //.first() es para es primero luego eq(subIndice) para los demás 

	


	 console.log(h1)
})
