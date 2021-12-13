//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo POST
function registrar() {

    //crea un objeto javascript
    let datos={
        identification: $("#txtId").val(),
        name: $("#txtName").val(),
        address: $("#txtAddress").val(),
        cellPhone: $("#txtCellphone").val(),
        email: $("#txtEmail").val(),
        password: $("#txtPassword").val(),
        zone: $("#txtZona").val(),
        type: $("#txtType").val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            // url: "http://144.22.227.164:8080/api/user/new",
            url: "http://localhost:8080/api/user/new",
            
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data : datosPeticion,
    
            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'POST',
    
            contentType:"application/JSON",
    
            // el tipo de información que se espera de respuesta
            //dataType: 'json',
    
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta.id);
                if(respuesta.id == null){
                    $("#mensajes").css("color", "red");
                    $("#mensajes").html("El correo ingresado ya existe asociado a una cuenta.");
                }else{
                    $("#mensajes").css("color", "green");
                    $("#mensajes").html("Cuenta creada de forma correcta.");
                    limpiarCampos();
                }
                $("#mensajes").show(1000);
                
                $("#mensajes").hide(5000);
                
            },
    
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").css("color", "red");
                $("#mensajes").html("Error peticion POST..." + status );
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function limpiarCampos(){
    $("#txtId").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtCellphone").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtZona").val("");
    $("#txtType").val("");
}

