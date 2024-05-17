$(document).ready(function (){
    let nom = $("#nom");
    let ape = $("#ape");
    let user2 = $("#user2");
    let correo = $("#correo");
    let passw = $("#passw");

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
      registro.passw = passw.val();


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

  })
