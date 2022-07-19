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

let flag = 0;
function lateralMenu(){
	const menu = document.querySelectorAll('.lateral-menu-bar');
	const optionMenuToHide = document.querySelectorAll('.visibility-option-menu');
	const optionMenuToShow = document.querySelectorAll('.not-visibility-option-menu');
	const borderBottomFirstSection = document.querySelectorAll('.first-section');
	const lateralMenu = document.querySelectorAll('.lateral-menu');
	const flexDirectionRow = document.querySelectorAll('.flex-direction-row');
	const flexDirectionColumn = document.querySelectorAll('.flex-direction-column');
	
	if (flag == 0){
		// Cambiar el ancho del menu (reducir)
		menu[0].classList.remove('lateral-menu-expanded');
		menu[0].classList.add('lateral-menu-not-expanded');
		
		// Ocutar opciones
		//recorrer TODOS los menus
		optionMenuToHide.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			optionMenuToHide[i].classList.remove('visibility-option-menu')
			optionMenuToHide[i].classList.add('not-visibility-option-menu')
		});
		
		//quitar la primer division
		borderBottomFirstSection[0].style.borderBottom = 'none';
		
		// Quitar el scroll
		menu[0].classList.remove('scroll-y');
		
		//Cambiar de row a column el flexbox
		flexDirectionRow.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			flexDirectionRow[i].classList.remove('flex-direction-row')
			flexDirectionRow[i].classList.add('flex-direction-column')
		});
		
		flag += 1;
	} else{
		// Cambiar el ancho del menu (Ampliar)
		menu[0].classList.remove('lateral-menu-not-expanded');
		menu[0].classList.add('lateral-menu-expanded');
		
		// Mostrar opciones
		//menuToHide[0].classList.remove('not-visibility-option-menu');
		//menuToHide[0].classList.add('visibility-option-menu');
		//recorrer TODOS los menus
		optionMenuToShow.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			optionMenuToShow[i].classList.remove('not-visibility-option-menu')
			optionMenuToShow[i].classList.add('visibility-option-menu')
		});
		
		//agregar la primer division
		borderBottomFirstSection[0].style.borderBottom = '1px solid var(--borders-color)';
		
		//Aggregar el scroll
		menu[0].classList.add('scroll-y');
		
		//Cambiar de column a row el flexbox
		flexDirectionColumn.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			flexDirectionColumn[i].classList.remove('flex-direction-column')
			flexDirectionColumn[i].classList.add('flex-direction-row')
		});
		flag -= 1;
	}
	
}