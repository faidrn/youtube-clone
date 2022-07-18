function showIconSearch(){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	//quitar la clase hide-alert-success para q se muestre el div
	iconToShow[0].classList.remove('hidden-icon');
}

function hideIconSearch(){
	const iconToHide = document.querySelectorAll('.icon-content');
	
	//Agregar clase para ocultar elemento
	iconToHide[0].classList.add('hidden-icon');
}

function showIconClear(){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	iconToShow[1].classList.remove('hidden-icon');
}

function hideIconClear(){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	iconToShow[1].classList.add('hidden-icon');
}

function clarInput(){
	const inputToClear = document.getElementById('input-search');
	
	inputToClear.value = "";
	inputToClear.focus();
	
	// ocultar icono limpiar
	hideIconClear();
	
	//mostar icono buscar
	showIconSearch();
}