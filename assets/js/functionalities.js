const inputSearch = document.getElementById('input-search');
const iconClear = document.getElementById('iconClear');
const hamburgerButton = document.getElementById('hamburgerButton');
const iconPreviousButtonsBar = document.getElementById('iconPreviousButtonsBar');
const iconNextButtonsBar = document.getElementById('iconNextButtonsBar');


// Eventos del input
inputSearch.addEventListener('focus', showIconSearch); 

function showIconSearch(){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	//quitar la clase para q se muestre el div
	iconToShow[0].classList.remove('hidden-icon');
}

inputSearch.addEventListener('blur', function (){
	const iconToHide = document.querySelectorAll('.icon-content');
	
	//Agregar clase para ocultar elemento
	iconToHide[0].classList.add('hidden-icon');
});

inputSearch.addEventListener('keypress', function (){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	// quitamos la clase q oculta el icono de limmpiar el input
	iconToShow[1].classList.remove('hidden-icon');
});


iconClear.addEventListener('click', function(){
	const inputToClear = document.getElementById('input-search');
	
	//Limpiamos el input y pasamos el enfoque al mismo
	inputToClear.value = "";
	inputToClear.focus();
	
	// ocultar icono limpiar
	hideIconClear();
	
	//mostar icono buscar
	showIconSearch();
});

function hideIconClear(){
	const iconToShow = document.querySelectorAll('.icon-content');
	
	iconToShow[1].classList.add('hidden-icon');
}


// Eventos del menu lateral
hamburgerButton.addEventListener('click', lateralMenu);

let flag = 0;
function lateralMenu(){
	const menu = document.querySelector('.lateral-menu-bar');
	const optionMenuToHide = document.querySelectorAll('.visibility-option-menu');
	const optionMenuToShow = document.querySelectorAll('.not-visibility-option-menu');
	const borderBottomFirstSection = document.querySelector('.first-section');
	const lateralMenu = document.querySelector('.lateral-menu');
	const flexDirectionRow = document.querySelectorAll('.flex-direction-row');
	const flexDirectionColumn = document.querySelectorAll('.flex-direction-column');
	const buttonsBar = document.querySelector('.buttons-bar');
	const rightArrowButtonsBar = document.querySelector('.right-arrow-buttons-bar');
	
	
	if (flag == 0){
		// Cambiar el ancho del menu (reducir)
		menu.classList.remove('lateral-menu-expanded', 'font-size-1vw');
		menu.classList.add('lateral-menu-not-expanded', 'font-size-09vw');
		
		// Ocutar opciones
		//recorrer TODOS los menus
		optionMenuToHide.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			optionMenuToHide[i].classList.remove('visibility-option-menu')
			optionMenuToHide[i].classList.add('not-visibility-option-menu')
		});
		
		//quitar la primer division
		borderBottomFirstSection.style.borderBottom = 'none';
		
		// Quitar el scroll
		menu.classList.remove('scroll-y');

		// Quitar el padding izquierdo de 2vw y agregar un padding de 0vw al elemento ul
		lateralMenu.classList.remove('padding-left-2vw');
		lateralMenu.classList.add('padding-left-0vw');
		
		//Cambiar de row a column el flexbox
		flexDirectionRow.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			flexDirectionRow[i].classList.remove('flex-direction-row')
			flexDirectionRow[i].classList.add('flex-direction-column', 'height-li-not-expanded')
		});
		
		// Cambiar el margen iquierdo de la barra de botones de acuerdo al nuevo ancho del menu lateral
		buttonsBar.classList.remove('left-17');
		buttonsBar.classList.add('left-6');
		
		rightArrowButtonsBar.classList.remove('right-17');
		rightArrowButtonsBar.classList.add('right-6');
		
		flag += 1;
	} else{
		// Cambiar el ancho del menu (Ampliar)
		menu.classList.remove('lateral-menu-not-expanded', 'font-size-09vw');
		menu.classList.add('lateral-menu-expanded', 'font-size-1vw');
		
		// Mostrar opciones
		//recorrer TODOS los menus
		optionMenuToShow.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			optionMenuToShow[i].classList.remove('not-visibility-option-menu')
			optionMenuToShow[i].classList.add('visibility-option-menu')
		});
		
		//agregar la primer division
		borderBottomFirstSection.style.borderBottom = '1px solid var(--borders-color)';
		
		//Aggregar el scroll
		menu.classList.add('scroll-y');

		// Agregar el padding izquierdo de 2vw y quitar el padding de 0vw al elemento ul
		lateralMenu.classList.remove('padding-left-0vw');
		lateralMenu.classList.add('padding-left-2vw');
		
		//Cambiar de column a row el flexbox
		flexDirectionColumn.forEach((everyOption, i) => {
			//Removiendo y asignando clases
			flexDirectionColumn[i].classList.remove('flex-direction-column', 'height-li-not-expanded')
			flexDirectionColumn[i].classList.add('flex-direction-row')
		});
		
		// Cambiar el margen iquierdo de la barra de botones de acuerdo al nuevo ancho del menu lateral
		buttonsBar.classList.remove('left-6');
		buttonsBar.classList.add('left-17');
		
		rightArrowButtonsBar.classList.remove('right-6');
		rightArrowButtonsBar.classList.add('right-17');
		
		flag -= 1;
	}
	
}


// Eventos de la barra de botones
iconNextButtonsBar.addEventListener('click', function(){
	const leftArrowButtonsBar = document.querySelector('.left-arrow-buttons-bar');
	// Mostrar el icono de Anterior
		// Remover la clase q lo oculta y poner la clase para centrarlo
	leftArrowButtonsBar.classList.remove('hide');
	leftArrowButtonsBar.classList.add('display-flex');
});



