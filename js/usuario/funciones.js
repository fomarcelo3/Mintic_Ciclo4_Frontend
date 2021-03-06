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
    let  identification= $("#txtId").val();
    let name = $("#txtName").val();
    let address = $("#txtAddress").val();
    let cellPhone = $("#txtCellphone").val();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let zone = $("#txtZona").val();
    let type = $("#txtType").val();
    let errores="";
    $("#mensajes").html("");
    $("#mensajes").css("color", "red");

    //valida que los campos no sean vacios
    if( validaesVacio(identification)) {
        errores="Identificacion vacio<br>";
        $("#txtId").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(200);
        $("#txtId").focus();
        // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(name)) {
        errores="Nombre vacio<br>";
        $("#txtName").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtName").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(address)) {
        errores="Dirección vacio<br>";
        $("#txtAddress").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtAddress").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(cellPhone)) {
        errores="Telefono vacio<br>";
        $("#txtCellphone").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtCellphone").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(email)) {
        errores="Email vacio<br>";
        $("#txtEmail").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtEmail").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(password) ) {
        errores="Password vacio<br>";
        $("#txtPassword").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPassword").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( password.length < 6  ) {
        errores="Ingrese al menos 6 caracteres para contraseña<br>";
        $("#txtPassword").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPassword").focus();
        //$("#mensajes").hide(5000);
        return false;
    }else if( validaesVacio(zone) ) {
        errores="Zona vacio<br>";
        $("#txtZona").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtZona").focus();
       // $("#mensajes").hide(2000);
        return false;
    }
    // else if( password != password2  ) {
    //     errores="Las contraseñas no coinciden.<br>";
    //     $("#exampleInputPassword2").val("");
    //     $("#mensajes").html(errores);
    //     $("#mensajes").show(500);
    //     $("#exampleInputPassword2").focus();
    //     $("#mensajes").hide(3000);
    //     return false;
    // }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarEditar(){
    //obtiene valores
    // let id = $("#id").val();
    let  identification= $("#txtIdentificacion").val();
    let name = $("#txtName").val();
    let address = $("#txtAddress").val();
    let cellPhone = $("#txtCellphone").val();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let zone = $("#txtZona").val();
    let type = $("#txtType").val();
    let errores="";
    $("#mensajes").html("");
    $("#mensajes").css("color", "red");

    //valida que los campos no sean vacios
    if( validaesVacio(identification)) {
        errores="Identificacion vacio<br>";
        $("#txtId").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(200);
        $("#txtId").focus();
        // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(name)) {
        errores="Nombre vacio<br>";
        $("#txtName").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtName").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(address)) {
        errores="Dirección vacio<br>";
        $("#txtAddress").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtAddress").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(cellPhone)) {
        errores="Telefono vacio<br>";
        $("#txtCellphone").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtCellphone").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(email)) {
        errores="Email vacio<br>";
        $("#txtEmail").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtEmail").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(password) ) {
        errores="Password vacio<br>";
        $("#txtPassword").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPassword").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( password.length < 6  ) {
        errores="Ingrese al menos 6 caracteres para contraseña<br>";
        $("#txtPassword").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPassword").focus();
        //$("#mensajes").hide(5000);
        return false;
    }else if( validaesVacio(zone) ) {
        errores="Zona vacio<br>";
        $("#txtZona").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtZona").focus();
       // $("#mensajes").hide(2000);
        return false;
    }
    // else if( password != password2  ) {
    //     errores="Las contraseñas no coinciden.<br>";
    //     $("#exampleInputPassword2").val("");
    //     $("#mensajes").html(errores);
    //     $("#mensajes").show(500);
    //     $("#exampleInputPassword2").focus();
    //     $("#mensajes").hide(3000);
    //     return false;
    // }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

