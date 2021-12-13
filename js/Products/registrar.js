//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo POST
function registrar() {

    //crea un objeto javascript
    let datos={
        reference: $("#txtReference").val(),
        category: $("#txtCategory").val(),
        size: $("#txtSize").val(),
        description: $("#txtDescription").val(),
        availability: $("#txtAvailability").val(),
        price: $("#txtPrice").val(),
        quantity: $("#txtQuantity").val(),
        photography: $("#txtPhotography").val()
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            //url: "http://144.22.227.164:8080/api/clothe/new",
            url: "http://localhost:8080/api/clothe/new",
            
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
                
                $("#mensajes").css("color", "green");
                $("#mensajes").html("Producto agregado de forma correcta.");
                limpiarCampos();
                
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
    $("#txtReference").val("");
    $("#txtCategory").val("");
    $("#txtSize").val("");
    $("#txtDescription").val("");
    $("#txtAvailability").val("");
    $("#txtPrice").val("");
    $("#txtQuantity").val("");
    $("#txtPhotography").val("");
}

