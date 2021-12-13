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
        // url: "http://144.22.227.164:8080/api/user/" + llaveRegistro,
        url: "http://localhost:8080/api/user/" + llaveRegistro,

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
   $("#idUser").val(items.id);
   $("#txtIdentificacion").val(items.identification);
   $("#txtName").val(items.name);
   $("#txtAddress").val(items.address);
   $("#txtCellphone").val(items.cellPhone);
   $("#txtEmail").val(items.email);
   $("#txtPassword").val(items.password);
   $("#txtZona").val(items.zone);
   $("#txtType").val(items.type);


}


function editarRegistro(){
        //crea un objeto javascript
        let datos={
            id: $("#idUser").val(),
            identification: $("#txtIdentificacion").val(),
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
    
        if (validarEditar()){
            $.ajax({
                // la URL para la petición (url: "url al recurso o endpoint")
                //url: "http://144.22.227.164:8080/api/user/update",
                url: "http://localhost:8080/api/user/update",
                
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
                    console.log(respuesta.id);
                    if(respuesta.id == null){
                        $("#mensajes").css("color", "red");
                        $("#mensajes").html("El usuario ingresado no existe.");
                    }else{
                        $("#mensajes").css("color", "green");
                        $("#mensajes").html("Usuario actualizado de forma correcta.");
                        
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