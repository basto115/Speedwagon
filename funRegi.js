const correo = document.getElementsById('correo');
const passw = document.getElementsById('passw');
const passw2 = document.getElementsById('passw2');
const user2 = document.getElementsById('user2');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = correo => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correo).toLowerCase());
}

const validateInputs = () => {
  const correoValue = correo.value.trim();
  const passwValue = passw.value.trim();
  const passw2Value = passw2.value.trim();

  if(correoValue === '') {
      setError(correo, 'Ingrese el correo electrónico');
  } else if (!isValidEmail(correoValue)) {
      setError(correo, 'Ingrese un correo electrónico válido');
  } else {
      setSuccess(correo);
  }

  if(passwValue === '') {
      setError(passw, 'Ingrese la contraseña');
  } else if (passwValue.length < 6 ) {
      setError(passw, 'La contraseña debe contener al menos 8 caracteres.')
  } else {
      setSuccess(passw);
  }

  if(passw2Value === '') {
      setError(passw2, 'Por favor confirmar contraseña');
  } else if (passw2Value !== passwValue) {
      setError(passw2, "Las contraseñas no coinciden");
  } else {
      setSuccess(passw2);
  }

};

$(document).ready(function (){
    let nom = $("#nom");
    let ape = $("#ape");
    let user2 = $("#user2");
    let correo = $("#correo");
    let passw = $("#passw");
    let passw2 = $("#passw2");

    let registro = {
      "nombre": "",
      "apellido": "",
      "usuario": "",
      "correo": "",
      "contraseña": ""
    }
    console.log(registro)

    $("#btnreg").click(function(){
      
      registro.nombre = nom.val();
      registro.apellido = ape.val();
      registro.usuario = user2.val();
      registro.correo = correo.val();
      registro.contraseña = passw.val();


      console.log(registro);

    })

    passw.keydown(function(){
      if (String(passw.val()).length <= 6){
        passw.css("border", "3px solid red");
        
      }else{
        passw.css("border", "3px solid green");
      }

    })

    user2.keydown(function(){
      if (String(user2.val()).length <= 4){
        user2.css("border", "3px solid red");
      }else{
        user2.css("border", "3px solid green");
      }

    })

    passw2.keydown(function(){
      if (String(passw2.val()).length <= 6){
        passw2.css("border", "3px solid red");
        
      }else{
        passw2.css("border", "3px solid green");
      }

    })

  })
