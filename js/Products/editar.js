$(document).ready(function () {

    let user = sessionStorage.getItem("user");
    let userJS = JSON.parse(user);
    let typeUser;

    if (userJS.type=='ASESOR')
        typeUser="ASESOR";
    else if (userJS.type=='COORD')
        typeUser="COORDINADOR";
    else
        typeUser="ADMINISTRADOR";


    $("#userName").html(userJS.name);
    $("#userType").html(typeUser);
    
    let URLactual = window.location.href;
    const parametro = URLactual.split("?");
    const id = parametro[1].split("=");
    seleccionar(id[1]);
   
});

function seleccionar(llaveRegistro){
    $.ajax({
        // url: "http://144.22.227.164:8080/api/clothe/" + llaveRegistro,
        url: "http://localhost:8080/api/clothe/" + llaveRegistro,

        type: 'GET',

        contentType: "application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            llenarFormulario(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Error peticion PUT..." + status);
            //$("#mensajes").hide(1000);
        }
    });

}

function llenarFormulario(items){
    $("#txtReference").val(items.reference);
    $("#txtReference1").val(items.reference);
    $("#txtCategory").val(items.category);
    $("#txtSize").val(items.size);
    $("#txtDescription").val(items.description);
    $("#txtAvailability").val(items.availability);
    $("#txtPrice").val(items.price);
    $("#txtQuantity").val(items.quantity);
    $("#txtPhotography").val(items.photography);


}


function editarRegistro(){
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
                // url: "http://144.22.227.164:8080/api/clothe/update",
                url: "http://localhost:8080/api/clothe/update",
                
                // la información a enviar
                // (también es posible utilizar una cadena de datos)
                //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
                data : datosPeticion,
        
                // especifica el tipo de petición http: POST, GET, PUT, DELETE
                type: 'PUT',
        
                contentType:"application/JSON",
        
                // el tipo de información que se espera de respuesta
                //dataType: 'json',
        
                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function (respuesta) {
                    //escribe en la consola del desarrollador para efectos de depuración
                    
                    $("#mensajes").css("color", "green");
                    $("#mensajes").html("Producto actualizado de forma correcta.");
                        
                    
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