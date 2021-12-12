function borrarRegistro(id){
    swal({
        title: "Eliminar",
        text: "Estas seguro de eliminar el registro seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((OK) => {
            let datos = {
                "id":id
            }
        
            let datosPeticion = JSON.stringify(datos);
            if (OK) {
                $.ajax({
                    url:"http://144.22.227.164:8080/api/clothe/" + id,
                    type: 'DELETE',
                    contentType:"application/JSON",
                    success : function (res){
                        console.log(res);
                    }
                })
                swal("Registro eliminado!", {
                    icon: "success",
                }).then((OK)=>{
                    location.href="/Admin/Products/listarProductos.html";
                });
            } else {
                swal("Has cancelado la operación.");
            }
        });
}

