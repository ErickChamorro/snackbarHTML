function showSnackbar(){

	var txt_nombres = document.getElementById("txt_nombres_apellidos");
	var txt_ciudad = document.getElementById("txt_ciudad");
	var txt_telefono = document.getElementById("txt_telefono");
	var txt_username = document.getElementById("txt_username");
	var mensaje = document.getElementById("mensaje");
	var positiveActionButton = document.getElementById("positiveActionButton");
	var negativeActionButton = document.getElementById("negativeActionButton");
	var terminos = document.getElementById("chk_terminos");

	// primero agarrar el div del HTML y guardarlo en una variable aca
	var snackbar = document.getElementById("snackbar");

	if (txt_nombres.value == "" && txt_ciudad.value == "" && txt_telefono.value == "" && txt_username.value == "" && terminos.checked == true) {
		
		// aqui es donde al presionar el boton asigna la clase que esta en el css
		snackbar.className = "show";
		
		mensaje.textContent = "has aceptado nuestros términos";

		positiveActionButton.textContent = "Aceptar";
		negativeActionButton.style.visibility = 'invisible';

		// despues de 3 segundos, quitamos el snackbar de la pantalla
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else if (txt_nombres.value == "" && txt_ciudad.value == "" && txt_telefono.value == "" && txt_username.value == "") {
		
		// aqui es donde al presionar el boton asigna la clase que esta en el css
		snackbar.className = "show";
		
		mensaje.textContent = "has presionado el boton sin llenar al menos un dato. ¿Cierto?";

		positiveActionButton.textContent = "Cierto!";
		negativeActionButton.textContent = "claro que no!";

		// despues de 3 segundos, quitamos el snackbar de la pantalla
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else if (txt_nombres.value != "" && txt_ciudad.value != "" && txt_telefono.value != "" && txt_username.value != "" && !terminos.checked == true) {

		snackbar.className = "show";		
		mensaje.textContent = "Acepta los términos y condiciones!";
		positiveActionButton.textContent = "Aceptar";
		negativeActionButton.textContent = "No quiero!";
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);

	}else if (txt_nombres.value != "" && txt_ciudad.value != "" && txt_telefono.value != "" && txt_username.value != "" && terminos.checked == true) {

		snackbar.className = "show";		
		mensaje.textContent = "Has sido registrado como: " + txt_username.value.toUpperCase();
		positiveActionButton.textContent = "Aceptar y continuar";
		negativeActionButton.style.visibility = 'none';
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);

	}else if (txt_nombres.value != "") {

		snackbar.className = "show";		
		mensaje.textContent = "con que asi te llamas...?";
		positiveActionButton.textContent = "Sí";
		negativeActionButton.textContent = "No";
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else if (txt_ciudad.value != "") {

		snackbar.className = "show";		
		mensaje.textContent = "Esa ciudad suena interesante!";
		positiveActionButton.textContent = "Gracias";
		negativeActionButton.textContent = "Eso ni siquiera es una ciudad!";
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else if (txt_telefono.value != "") {

		snackbar.className = "show";		
		mensaje.textContent = "Llamando a este numero... Es broma!";
		positiveActionButton.textContent = "jajaja";
		negativeActionButton.style.visibility = 'none';
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else if (txt_username.value != "") {

		snackbar.className = "show";		
		mensaje.textContent = "Quieres registrarte como: " +txt_username.value.toUpperCase() + "? ";
		positiveActionButton.textContent = "Sí";
		negativeActionButton.textContent = "No";
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}else{
		snackbar.className = "show";		
		mensaje.textContent = "Has sido registrado como: " + txt_username.value.toUpperCase();
		positiveActionButton.textContent = "Aceptar y continuar";
		setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");}, 3000);
	}

}

function guardar_cambios(){
	// var btnSave = document.getElementById('btnSave');
	alert('has guardado los cambios');
}