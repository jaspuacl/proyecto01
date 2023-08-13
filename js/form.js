function validar(){
    //Validar nombre
    if (document.formularios.myname.value.length < 5){
      alert("Ingrese un nombre valido.")
      document.formularios.myname.focus()
      return 0;
    }

    //validar apellido
    if (document.formularios.mylastname.value.length < 4){
        alert("Ingrese un apellidos valido.")
        document.formularios.mylastname.focus()
        return 0;
      }

      //validar correo
    if (document.formularios.mail.value.length < 5){
        alert("Ingrese un correo valido.")
        document.formularios.mail.focus()
        return 0;
      }

      //validar telefono
    if (document.formularios.phone.value.length < 5){
        alert("Ingrese numero de telefono.")
        document.formularios.phone.focus()
        return 0;
      }

    alert("Muchas gracias por enviar el formulario en brebe nos comunicaremos con su persona");
        docent.formularios1.submit();
       
}