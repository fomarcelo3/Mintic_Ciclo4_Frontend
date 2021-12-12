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
    let reference= $("#txtReference").val();
    let category= $("#txtCategory").val();
    let size= $("#txtSize").val();
    let description= $("#txtDescription").val();
    let availability= $("#txtAvailability").val();
    let price= $("#txtPrice").val();
    let quantity= $("#txtQuantity").val();
    let photography= $("#txtPhotography").val();

    let errores="";
    $("#mensajes").html("");
    $("#mensajes").css("color", "red");

    //valida que los campos no sean vacios
    if( validaesVacio(reference)) {
        errores="Referencia producto vacio<br>";
        $("#txtReference").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(200);
        $("#txtReference").focus();
        // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(description)) {
        errores="Descripcion de producto vacio<br>";
        $("#txtDescription").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtDescription").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(category)) {
        errores="Indique categoria del producto<br>";
        $("#txtCategory").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtCategory").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(size)) {
        errores="Talla vacio<br>";
        $("#txtSize").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtSize").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(availability)) {
        errores="Seleccione disponibilidad del producto<br>";
        $("#txtEmail").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtEmail").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(price) ) {
        errores="Precio vacio<br>";
        $("#txtPrice").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPrice").focus();
        //$("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(quantity) ) {
        errores="Cantidad vacio<br>";
        $("#txtQuantity").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtQuantity").focus();
       // $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(photography) ) {
        errores="fotografia vacio<br>";
        $("#txtPhotography").val("");
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#txtPhotography").focus();
       // $("#mensajes").hide(2000);
        return false;
    }
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

