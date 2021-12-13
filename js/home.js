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

    //si hizo clic en el enlace de cerrar sesion
    $("#cerrarSession").click(function (){
        console.log("click");
        sessionStorage.removeItem("user");
        location.href="index.html"
    });
});
