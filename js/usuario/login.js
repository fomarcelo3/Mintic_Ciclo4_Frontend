//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo get
function ingresar() {

    password= $("#passwordLogin").val();
    email= $("#emailLogin").val();


    
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            // url: "http://144.22.227.164:8080/api/user/" + email + "/"+ password,
            url: "http://localhost:8080/api/user/" + email + "/"+ password,
    
            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'GET',
    
            contentType:"application/JSON",
    
            // el tipo de información que se espera de respuesta
            //dataType: 'json',
    
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                if(respuesta.id == null){
                    $("#mensajesLogin").show(1000);
                    $("#mensajesLogin").html("Los datos ingresados son incorrectos.");
                }else{
                    limpiarCamposLogin();
                    //crea objeto javascript que contiene la información del usuario
                    let userJS = {
                        id: respuesta.id,
                        identification: respuesta.identification,
                        name: respuesta.name,
                        address: respuesta.address,
                        cellPhone: respuesta.cellPhone,
                        email: respuesta.email,
                        password: respuesta.password,
                        zone: respuesta.zone,
                        type: respuesta.type
                    };

                    //transforma el objeto javascript a json antes de guardarlo en el sessionStorage
                    let user = JSON.stringify(userJS);

                    //almacena el usuario en el sessionStorage, para hacerlo disponible a las otras páginas
                    sessionStorage.setItem("user", user);
                    if(respuesta.type === "COORD"){
                        location.href = "Users/coord/home.html";
                    }else if(respuesta.type === "ASESOR"){
                        location.href = "Users/asesor/home.html";
                    }else{

                        location.href = "Admin/home.html";
                    }
                }
                
                
                $("#mensajesLogin").hide(5000);
                
            },
    
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajesLogin").show(1000);
                $("#mensajesLogin").html("Error peticion POST..." + status );
                $("#mensajesLogin").hide(1000);
            }
        });
    
}

function limpiarCamposLogin(){
    $("#emailLogin").val("");
    $("#passwordLogin").val("");
}
