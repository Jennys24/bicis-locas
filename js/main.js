function validarEmail(valor){
  if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
  	return true;
  } else {
  	return false;
  };
};

function validateForm() {
	$('.prevent').remove();
	var fnombre = $('#name').val().trim();
	if (fnombre == '') {
		$('#name').parent().append('<span class="prevent">Debes registrar un nombre</span>');
	} else if( /^[a-zA-Z ]+$/.test(fnombre) == false){
		$('#name').parent().append('<span class="prevent">Ingresa sólo letras.</span>'); 
	};
	

	var fapellido = $('#lastname').val().trim();
	if (fapellido == '') {
		$('#lastname').parent().append('<span class="prevent">Debes registrar un apellido</span>');
	} else if( /^[a-zA-Z ]+$/.test(fapellido) == false){
		$('#lastname').parent().append('<span class="prevent">Ingresa sólo letras.</span>'); 
	};

	var femail = $('#input-email').val().trim();
	if (femail == '') {
		$('#input-email').parent().append('<span class="prevent">Debes ingresar un email</span>');
	} else if(validarEmail(femail) == false ) {
		$('#input-email').parent().append('<span class="prevent">Debes ingresar un email válido.</span>');
	};

	var fclave = $('#input-password').val().trim();
	if (fclave == '') {
		$('#input-password').parent().append('<span class="prevent">Crea una contraseña. </span>');
	} else if (fclave == "123456" || fclave =="098754" || fclave =="password"){
		$('#input-password').parent().append('<span class="prevent">Contraseña vulnerable. Evita usar correlativo "123456" ó "987654" o "password"</span>');
	} else if (fclave.length < 6){
		$('#input-password').parent().append('<span class="prevent">Crea una contraseña válida, mìnimo 6 dígitos</span>');
	};

	var fbox = $('select').val();
	if (fbox == 0) {
		$('select').parent().append('<span class="prevent">Selecciona una opción.</span>');
	};



};