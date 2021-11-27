//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo POST
function registrar() {

    //crea un objeto javascript
    let datos={
        email: $("#exampleInputEmail1").val(),
        password: $("#exampleInputPassword1").val(),
        name: $("#exampleInputName").val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
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

                    $("#mensajes").html("El correo ingresado ya existe asociado a una cuenta.");
                }else{
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
                $("#mensajes").html("Error peticion POST..." + status );
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function limpiarCampos(){
    $("#exampleInputEmail1").val("");
    $("#exampleInputPassword1").val("");
    $("#exampleInputName").val("");
    $("#exampleInputPassword2").val("");
}

