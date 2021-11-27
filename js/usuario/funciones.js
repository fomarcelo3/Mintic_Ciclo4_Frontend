function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    // let id = $("#id").val();
    let name = $("#exampleInputName").val();
    let email = $("#exampleInputEmail1").val();
    let password = $("#exampleInputPassword1").val();
    let password2 = $("#exampleInputPassword2").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Nombre vacio<br>";
        $("#exampleInputName").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#exampleInputName").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(email)) {
        errores="Email vacio<br>";
        $("#exampleInputEmail1").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#exampleInputEmail1").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(password) ) {
        errores="Password vacio<br>";
        $("#exampleInputPassword1").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#exampleInputPassword1").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( password.length < 6  ) {
        errores="Ingrese al menos 6 caracteres para contraseña<br>";
        $("#exampleInputPassword1").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#exampleInputPassword1").focus();
        $("#mensajes").hide(5000);
        return false;
    }else if( password != password2  ) {
        errores="Las contraseñas no coinciden.<br>";
        $("#exampleInputPassword2").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#exampleInputPassword2").focus();
        $("#mensajes").hide(3000);
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

